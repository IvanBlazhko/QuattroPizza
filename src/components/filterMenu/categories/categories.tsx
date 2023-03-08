import React, { useState, useEffect } from 'react';
import { useAppDispatch } from '../../../redux/store';

import { filterValue } from '../../../redux/productsFilterSlice/productsFilterSlice';
import { ICategory } from '../../../interfaces/ICategory';

import CategoriesItem from './categoriesItem';

interface IProps {
  categories: ICategory[];
}

const Categories: React.FC<IProps> = ({ categories = [] }) => {
  const [selectCategories, setSelectCategories] = useState(
    categories[0].category
  );

  const handleCategories = (category: string) => {
    setSelectCategories(category);
  };

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(filterValue(selectCategories));
  }, [dispatch, selectCategories]);

  return (
    <div className="categories">
      <ul className="content__top_items">
        {categories.map(item => (
          <CategoriesItem
            key={item.id}
            handleCategories={handleCategories}
            category={item.category}
            selectCategories={selectCategories}
          />
        ))}
      </ul>
    </div>
  );
};

export default Categories;
