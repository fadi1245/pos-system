import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CategoryApi, { Category } from "./categoryApi";

type CatState = {
  items: Category[];
  loading: boolean;
  error?: string | null;
};

const initialState: CatState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchCategories = createAsyncThunk("category/fetch", async () => {
  const res = await CategoryApi.list();
  return res;
});

export const createCategory = createAsyncThunk("category/create", async (payload: { name: string }) => {
  const res = await CategoryApi.create(payload);
  return res;
});

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (b) => {
    b.addCase(fetchCategories.pending, (s) => { s.loading = true; })
      .addCase(fetchCategories.fulfilled, (s, a) => { s.loading = false; s.items = a.payload; })
      .addCase(fetchCategories.rejected, (s, a) => { s.loading = false; s.error = a.error.message ?? "Failed"; })
      .addCase(createCategory.fulfilled, (s, a) => { s.items = [a.payload, ...s.items]; });
  },
});

export default categorySlice.reducer;
