import React from 'react';

import ProductsLoader from '../../components/loader/productsLoader';
import ProductsList from '../../components/productsList/productsList';
import FilterMenu from '../../components/filterMenu/filterMenu';
import Error from '../../components/dataError/error';

import { useGetDessertsQuery } from '../../redux/dessertsSlice/dessertsSlice';

const Desserts: React.FC = () => {
  const {
    data: dessertsData,
    error: dessertsError,
    isFetching: dessertsFetching,
  } = useGetDessertsQuery();

  return (
    <div className="container">
      <FilterMenu />
      {dessertsFetching && <ProductsLoader />}
      {dessertsData && <ProductsList data={dessertsData} />}
      {dessertsError && <Error />}
    </div>
  );
};

export default Desserts;
