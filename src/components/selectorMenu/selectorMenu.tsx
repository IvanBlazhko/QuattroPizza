import React, { useEffect } from 'react';

import Options from './options/options';
import Size from './size/size';

interface IProps {
  options: string[];
  sizes: string[];
  handlePrice: (opt: string) => void;
  handleSelect: (type: string, value: string) => void;
  selectedOptions: string;
  selectedSize: string;
}

const SelectorMenu: React.FC<IProps> = ({
  options = [],
  sizes = [],
  handlePrice,
  handleSelect,
  selectedOptions,
  selectedSize,
}) => {
  useEffect(() => {
    handlePrice(selectedSize);
  }, [handlePrice, selectedSize]);
  return (
    <div className="item-block__selector">
      {options.length > 0 && (
        <Options
          options={options}
          selectedOptions={selectedOptions}
          handleSelect={handleSelect}
        />
      )}
      {sizes.length > 0 && (
        <Size
          sizes={sizes}
          selectedSize={selectedSize}
          handleSelect={handleSelect}
        />
      )}
    </div>
  );
};

export default SelectorMenu;
