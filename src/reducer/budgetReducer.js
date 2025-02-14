import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  budgetGoals: [],
  loading: false,
  error: null,
};

const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    SET_BUDGET_GOAL_REQUEST: (state) => {
      state.loading = true;
      state.error = null;
    },
    SET_BUDGET_GOAL_SUCCESS: (state, action) => {
      state.loading = false;
      state.budgetGoals.push(action.payload);
    },
    SET_BUDGET_GOAL_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { SET_BUDGET_GOAL_REQUEST, SET_BUDGET_GOAL_SUCCESS, SET_BUDGET_GOAL_FAIL } = budgetSlice.actions;
export default budgetSlice.reducer;
