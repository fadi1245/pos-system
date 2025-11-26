import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginResponse } from "./AuthApi";

interface AuthState {
  user: {
    _id: string;
    username: string;
    email: string;
    phone: string;
  } | null;
  token: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem("token"),
  isAuthenticated: !!localStorage.getItem("token"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuceess: (state, action: PayloadAction<LoginResponse>) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAuthenticated = true;

      localStorage.setItem("token", action.payload.token);
    },

    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
    }
  },
});

export const { loginSuceess, logout } = authSlice.actions;
export default authSlice.reducer;
