import React from 'react';

import ProductsLoader from '../../components/loader/productsLoader';
import ProductsList from '../../components/productsList/productsList';
import FilterMenu from '../../components/filterMenu/filterMenu';
import Error from '../../components/dataError/error';

import { useGetDrinksQuery } from '../../redux/drinksSlice/drinksSlice';

import { ICategory } from '../../interfaces/ICategory';

const Drinks: React.FC = () => {
  const categories: ICategory[] = [
    { id: 1, category: 'All' },
    { id: 2, category: 'Water' },
    { id: 3, category: 'Soda' },
    { id: 4, category: 'Juice' },
    { id: 5, category: 'Alcohol' },
  ];

  const {
    data: drinksData,
    error: drinksError,
    isFetching: drinksFetching,
  } = useGetDrinksQuery();

  return (
    <div className="container">
      <FilterMenu categories={categories} />
      {drinksFetching && <ProductsLoader />}
      {drinksData && <ProductsList data={drinksData} />}
      {drinksError && <Error />}
    </div>
  );
};

export default Drinks;
