import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from "next-redux-wrapper";
import { AppDispatch } from "./index";

export interface CategoryState {
  showSelects: boolean;
}

const initialState: CategoryState = {
  showSelects: false,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    showSelectHandler: (state) => {
      state.showSelects = !state.showSelects;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: PayloadAction<CategoryState>) => {
      return {
        ...state,
        ...action.payload,
      };
    });
  },
});

export const { showSelectHandler } = categorySlice.actions;

export const selectCategoryState = (state: { category: CategoryState }) => state.category;

export const updateCategoryOnServer = () => {
  // Your asynchronous action here using Redux Thunk
  return async (dispatch: AppDispatch, getState: () => { category: CategoryState }) => {
    const state = getState();
    // Dispatch other actions or modify state as needed
  };
};