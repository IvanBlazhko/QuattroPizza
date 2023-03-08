import React, { useMemo } from 'react';

import { useSelector } from 'react-redux';
import { getProductsFilter } from '../../redux/productsFilterSlice/selectors';
import { getProductsSort } from '../../redux/productsFilterSlice/selectors';
import { getVisibleProducts } from '../../helpers/getVisibleProducts';
import { sortProducts } from '../../helpers/sortProducts';

import ProductsListItem from './productsListItem/productsListItem';

import { IProduct } from '../../interfaces/IProduct';

interface IProps {
  data: IProduct[];
}

const ProductsList: React.FC<IProps> = ({ data }) => {
  const productsFilter: string = useSelector(getProductsFilter);
  const sortValue: string = useSelector(getProductsSort);

  const filterProducts = useMemo(() => {
    return getVisibleProducts(data, productsFilter);
  }, [data, productsFilter]);

  const visibleProducts = useMemo(() => {
    return sortProducts(filterProducts, sortValue);
  }, [filterProducts, sortValue]);

  return (
    <>
      {visibleProducts && (
        <div className="content__items">
          {visibleProducts?.map(item => (
            <ProductsListItem key={item.id} {...item} />
          ))}
        </div>
      )}
    </>
  );
};

export default ProductsList;
