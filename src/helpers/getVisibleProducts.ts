import { IProduct } from '../interfaces/IProduct';

export const getVisibleProducts = (data: IProduct[], filter: string) => {
  if (data?.length > 0) {
    if (filter === 'All' || filter === '') return data;
    const normalizeFilter = filter?.toLowerCase();
    return data.filter(item =>
      item.type?.toLowerCase().includes(normalizeFilter)
    );
  }
  return [];
};
