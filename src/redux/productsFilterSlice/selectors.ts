import { RootState } from '../store';

export const getProductsFilter = (state: RootState) =>
  state.productsFilter.filter;

export const getProductsSort = (state: RootState) => state.productsFilter.sort;
