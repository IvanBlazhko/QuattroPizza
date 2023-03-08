import { RootState } from '../store';

export const getCartItems = (state: RootState) => state.cart.items;

export const getTotalPrice = (state: RootState) => state.cart.totalPrice;
