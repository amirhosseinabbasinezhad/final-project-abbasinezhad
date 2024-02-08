import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './index';
//import { calculateDiscountNumber } from 'utils';

// Type
type cartStateType = {
  items: {
    id: string;
    title: string;
    salePercent: number;
    price: number;
    img: string;
    amount: number;
  }[];
  totalAmount: number;
  totalCount: number;
  //cartDrawerShow: boolean;
  //couponValue: number;
  //couponMax: number;
};

const initialState: cartStateType = {
  items: [],
  totalAmount: 0,
  totalCount: 0,
 // cartDrawerShow: false,
 // couponValue: 0,
 // couponMax: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getCartTotal: (state) => {
      let { totalAmount, totalCount } = state.items.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          //const itemTotal = price * amount;

          //cartTotal.totalAmount += itemTotal;
          cartTotal.totalCount += amount;
          return cartTotal;
        },
        {
          totalAmount: 0,
          totalCount: 0,
        }
      );
      state.totalAmount = parseInt(totalAmount.toFixed(2));
      state.totalCount = totalCount;
    },
    remove: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.item.id);
      state.totalAmount -= action.payload.item.price
      //if you want delete product that is more than 1 in cart ,must change code
      state.totalCount -= 1;
    },
    addProductToCart: (state, action) => {
      if (state.items.length > 0) {
        state.items = [...state.items, action.payload.item];
        state.totalAmount += action.payload.item.price;
        state.totalCount += 1;
      } else {
        state.items = [action.payload.item];
        state.totalAmount = action.payload.item.price
        state.totalCount = 1;
      }
    },
    increase: (state, action) => {
      if (state.items.length > 0) {
        state.items.map((item, index) => {
          if (item.id === action.payload.item.id) {
            state.items[index] = { ...item, amount: item.amount + 1 };
          }
        });
        state.totalCount += 1;
        state.totalAmount += action.payload.item.price
      }
    },
    decrease: (state, action) => {
      state.items = state.items
        .map((item) => {
          if (item.id === action.payload.item.id) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        })
        .filter((item) => item.amount !== 0);
      state.totalCount -= 1;
      state.totalAmount -= action.payload.item.price;
    },
    clearCart: (state) => {
      state.items = [];
      state.totalCount = 0;
      state.totalAmount = 0;
    },
    //getCartItems: (state) => {
    //  //state.items = useS;
    //},
    //changeShowCartDrawer: (state, action) => {
    //  state.cartDrawerShow = action.payload;
    //},
    //setCoupon: (state, action) => {
    //  state.couponValue = action.payload.value;
    //  state.couponMax = action.payload.max;
    //},
  },
});

export const {
  getCartTotal,
  remove,
  increase,
  decrease,
  addProductToCart,
  //changeShowCartDrawer,
  clearCart,
  //getCartItems,
  //setCoupon,
} = cartSlice.actions;
export default cartSlice.reducer;
export const cartState = (state: RootState) => state.cart;
