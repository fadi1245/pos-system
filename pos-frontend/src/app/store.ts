import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../features/category/categorySlice";
import billingReducer from "../features/billing/billingSlice";
import productReducer from "../features/product/productSlice";
import authReducer from "../features/auth/authSlice";
import receiptReducer from "../features/receipt/receiptSlice";


export const store = configureStore({
  reducer: {
    auth: authReducer,         
    product: productReducer,
    category: categoryReducer,
    billing: billingReducer,
    receipt: receiptReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
