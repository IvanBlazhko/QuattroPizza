import React from 'react';

import Categories from './categories/categories';
import SortSelect from './sort/sortSelect';

import { ICategory } from '../../interfaces/ICategory';

interface IProps {
  categories?: ICategory[];
}

const FilterMenu: React.FC<IProps> = ({ categories }) => {
  return (
    <div className="content__top">
      {categories && <Categories categories={categories} />}
      <SortSelect />
    </div>
  );
};

export default FilterMenu;
