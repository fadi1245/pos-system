import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import ProductApi, { Product } from "./productApi";

type ProductState = {
  items: Product[];
  loading: boolean;
  nextCursor: string | null;
  error?: string | null;
  currentCategory?: string | null;
  searchQuery?: string | null;
};

const initialState: ProductState = {
  items: [],
  loading: false,
  nextCursor: null,
  error: null,
  currentCategory: null,
  searchQuery: null,
};

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async ({ limit = 12, cursor, category, q }: { limit?: number; cursor?: string; category?: string; q?: string }) => {
    const res = await ProductApi.list(limit, cursor, category, q);
    return res;
  }
);

export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (payload: Partial<Product>) => {
    const res = await ProductApi.create(payload);
    return res;
  }
);

export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async ({ id, payload }: { id: string; payload: Partial<Product> }) => {
    const res = await ProductApi.update(id, payload);
    return res;
  }
);

export const deleteProduct = createAsyncThunk("product/deleteProduct", async (id: string) => {
  const res = await ProductApi.remove(id);
  return { id };
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    resetProducts(state) {
      state.items = [];
      state.nextCursor = null;
      state.error = null;
    },
    setCategoryFilter(state, action: PayloadAction<string | null>) {
      state.currentCategory = action.payload;
      state.items = [];
      state.nextCursor = null;
    },
    setSearchQuery(state, action: PayloadAction<string | null>) {
      state.searchQuery = action.payload;
      state.items = [];
      state.nextCursor = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (s) => {
        s.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (s, action) => {
        s.loading = false;
        s.items = [...(s.items ?? []), ...action.payload.items];
        s.nextCursor = action.payload.nextCursor ?? null;
      })
      .addCase(fetchProducts.rejected, (s, action) => {
        s.loading = false;
        s.error = action.error.message ?? "Failed to load";
      })
      .addCase(createProduct.fulfilled, (s, action) => {
        s.items = [action.payload, ...(s.items ?? [])];
      })
      .addCase(updateProduct.fulfilled, (s, action) => {
        const idx = s.items.findIndex((p) => p._id === action.payload._id);
        if (idx >= 0) s.items[idx] = action.payload;
      })
      .addCase(deleteProduct.fulfilled, (s, action) => {
        s.items = s.items.filter((p) => p._id !== action.payload.id);
      });
  },
});

export const { resetProducts, setCategoryFilter, setSearchQuery } = productSlice.actions;
export default productSlice.reducer;
