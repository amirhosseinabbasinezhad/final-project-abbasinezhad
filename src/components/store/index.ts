import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
//import userReducer from "./userSlice";
//import productReducer from "./productsSlice";
//import categoryReducer from "./categorySlice";
import cartSlice from "./cartSlice"

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    //user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
