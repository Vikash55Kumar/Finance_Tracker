import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: [],
  loading: false,
  error: null,
};

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    ADD_TRANSACTION_REQUEST: (state) => {
      state.loading = true;
      state.error = null;
    },
    ADD_TRANSACTION_SUCCESS: (state, action) => {
      state.loading = false;
      state.transactions.push(action.payload);
    },
    ADD_TRANSACTION_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { ADD_TRANSACTION_REQUEST, ADD_TRANSACTION_SUCCESS, ADD_TRANSACTION_FAIL } = transactionSlice.actions;
export default transactionSlice.reducer;
