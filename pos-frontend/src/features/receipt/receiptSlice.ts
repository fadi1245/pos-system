import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ReceiptApi from "./receiptApi";

export const createReceipt = createAsyncThunk("receipt/create", async (items: any[]) => {
  const res = await ReceiptApi.create(items);
  return res;
});

const receiptSlice = createSlice({
  name: "receipt",
  initialState: { lastReceipt: null, loading: false },
  reducers: {},
  extraReducers: (b) => {
    b.addCase(createReceipt.pending, (s) => { s.loading = true; })
     .addCase(createReceipt.fulfilled, (s, a) => { s.loading = false; s.lastReceipt = a.payload; })
     .addCase(createReceipt.rejected, (s) => { s.loading = false; });
  },
});

export default receiptSlice.reducer;
