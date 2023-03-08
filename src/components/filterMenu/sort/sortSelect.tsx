import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../redux/store';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import { sortValue } from '../../../redux/productsFilterSlice/productsFilterSlice';
import { ISortOption } from '../../../interfaces/ISortOption';

const options: ISortOption[] = [
  { value: 'Often', label: 'Often' },
  { value: 'Price', label: 'Price' },
  { value: 'Alphabetically', label: 'Alphabetically' },
];

const animatedComponent = makeAnimated();

const SortSelect: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState('Often');

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(sortValue(selectedOptions));
  }, [dispatch, selectedOptions]);

  const getValue = () => {
    return selectedOptions
      ? options.find(item => item.value === selectedOptions)
      : '';
  };

  const handleChange = (option: any) => {
    setSelectedOptions(option.value);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <b>Sort by:</b>
        <Select
          className="sort__select"
          classNamePrefix="sort-select"
          components={animatedComponent}
          options={options}
          onChange={option => handleChange(option)}
          value={getValue()}
        />
      </div>
    </div>
  );
};

export default SortSelect;
