import React from 'react';

import ProductsLoader from '../../components/loader/productsLoader';
import ProductsList from '../../components/productsList/productsList';
import FilterMenu from '../../components/filterMenu/filterMenu';
import Error from '../../components/dataError/error';

import { useGetAllPizzaQuery } from '../../redux/pizzaSlice/pizzaSlice';

import { ICategory } from '../../interfaces/ICategory';

const Pizza: React.FC = () => {
  const categories: ICategory[] = [
    { id: 1, category: 'All' },
    { id: 2, category: 'Meat' },
    { id: 3, category: 'Vegetarian' },
    { id: 4, category: 'Grill Pizza' },
    { id: 5, category: 'Acute' },
  ];

  const {
    data: pizzaData,
    error: pizzaError,
    isFetching: pizzaFetching,
  } = useGetAllPizzaQuery();

  return (
    <div className="container">
      <FilterMenu categories={categories} />
      {pizzaFetching && <ProductsLoader />}
      {pizzaData && <ProductsList data={pizzaData} />}
      {pizzaError && <Error />}
    </div>
  );
};

export default Pizza;
