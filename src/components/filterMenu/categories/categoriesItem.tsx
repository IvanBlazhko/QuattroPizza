import React from 'react';

interface IProps {
  category: string;
  selectCategories: string;
  handleCategories: (category: string) => void;
}

const CategoriesItem: React.FC<IProps> = ({
  handleCategories,
  selectCategories,
  category,
}) => {
  return (
    <li
      className={selectCategories === category ? 'active' : ''}
      onClick={() => handleCategories(category)}
    >
      {category}
    </li>
  );
};

export default CategoriesItem;
