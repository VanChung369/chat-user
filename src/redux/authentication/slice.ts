import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const namespace = "authentication";

interface AuthenticationState {
  authenticationToken: string | null;
  authenticationTokenRefesh: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthenticationState = {
  authenticationToken: null,
  authenticationTokenRefesh: null,
  isAuthenticated: false,
};

const authenticationSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<any>) => {
      const { token, refreshToken } = action.payload;
      state.authenticationToken = token;
      state.authenticationTokenRefesh = refreshToken;
      state.isAuthenticated = !!token;
    },
    clearAuth: (state) => {
      state.authenticationToken = null;
      state.authenticationTokenRefesh = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setToken, clearAuth } = authenticationSlice.actions;
export default authenticationSlice.reducer;
