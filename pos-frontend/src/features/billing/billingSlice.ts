import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../product/productApi";

export type BillingLine = {
  id: string; 
  product: Product;
  qty: number;
  price: number;
  subtotal: number;
  selected?: boolean;
};

type BillingState = {
  lines: BillingLine[];
  total: number;
};

const initialState: BillingState = {
  lines: [],
  total: 0,
};

const computeTotal = (lines: BillingLine[]) =>
  lines.reduce((s, l) => s + (l.subtotal ?? l.price * l.qty), 0);

const billingSlice = createSlice({
  name: "billing",
  initialState,
  reducers: {
    addProductToBill(state, action: PayloadAction<{ product: Product; qty?: number }>) {
      const { product, qty = 1 } = action.payload;
      const existing = state.lines.find((l) => l.product._id === product._id);
      if (existing) {
        existing.qty += qty;
        existing.subtotal = existing.qty * existing.price;
      } else {
        const line: BillingLine = {
          id: String(product._id),
          product,
          qty,
          price: product.price,
          subtotal: (product.price || 0) * qty,
        };
        state.lines.push(line);
      }
      state.total = computeTotal(state.lines);
    },

    increaseQty(state, action: PayloadAction<{ id: string }>) {
      const l = state.lines.find((x) => x.id === action.payload.id);
      if (l) {
        l.qty += 1;
        l.subtotal = l.qty * l.price;
      }
      state.total = computeTotal(state.lines);
    },

    decreaseQty(state, action: PayloadAction<{ id: string }>) {
      const l = state.lines.find((x) => x.id === action.payload.id);
      if (l) {
        l.qty = Math.max(1, l.qty - 1);
        l.subtotal = l.qty * l.price;
      }
      state.total = computeTotal(state.lines);
    },

    removeLine(state, action: PayloadAction<{ id: string }>) {
      state.lines = state.lines.filter((l) => l.id !== action.payload.id);
      state.total = computeTotal(state.lines);
    },

    clearAll(state) {
      state.lines = [];
      state.total = 0;
    },
  },
});

export const { addProductToBill, increaseQty, decreaseQty, removeLine, clearAll } = billingSlice.actions;
export default billingSlice.reducer;
