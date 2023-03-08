import { IProduct } from '../interfaces/IProduct';

export const sortProducts = (data: IProduct[], sortBy: string) => {
  if (sortBy === 'Often') return data;
  if (sortBy === 'Price') {
    const sortProducts = [...data];
    return sortProducts.sort((a, b) => (a.price > b.price ? 1 : -1));
  }
  if (sortBy === 'Alphabetically') {
    const sortProducts = [...data];
    return sortProducts.sort((a, b) => (a.title > b.title ? 1 : -1));
  }
};
