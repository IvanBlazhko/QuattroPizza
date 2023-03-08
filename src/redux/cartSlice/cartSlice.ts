import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

type setCountAction = {
  action: string;
  cartId: string;
};

type addProductType = {
  id: string;
  imageUrl: string;
  title: string;
  ingredients: string;
  price: number;
  option: string;
  size: string;
};

type CartItem = {
  cartId: string;
  count: number;
};

interface ICartSliceStore {
  totalPrice: number;
  items: (CartItem & addProductType)[];
}

const initialState: ICartSliceStore = {
  items: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<addProductType>) {
      const findItem = state.items.find(
        item =>
          item.id === action.payload.id &&
          item.option === action.payload.option &&
          item.size === action.payload.size
      );

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          cartId: uuidv4(),
          count: 1,
        });
      }

      state.totalPrice = state.items.reduce((sum, item) => {
        return item.price * item.count + sum;
      }, 0);
    },
    setCount(state, action: PayloadAction<setCountAction>) {
      const findItem = state.items.find(
        item => item.cartId === action.payload.cartId
      );

      if (findItem) {
        if (action.payload.action === 'increment') findItem.count++;
        if (action.payload.action === 'decrement') findItem.count--;
      }

      state.totalPrice = state.items.reduce((sum, item) => {
        return item.price * item.count + sum;
      }, 0);
    },
    removeProduct(state, action: PayloadAction<string>) {
      state.items = state.items.filter(item => item.cartId !== action.payload);
    },
    clearCart(state) {
      state.items = [];
      state.totalPrice = state.items.reduce((sum, item) => {
        return item.price * item.count + sum;
      }, 0);
    },
  },
});

export const { addProduct, removeProduct, setCount, clearCart } =
  cartSlice.actions;
