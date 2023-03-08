import React from 'react';

interface IProps {
  sizes: string[];
  selectedSize: string;
  handleSelect: (type: string, value: string) => void;
}

const Size: React.FC<IProps> = ({ sizes, selectedSize, handleSelect }) => {
  return (
    <ul>
      {sizes.map(item => (
        <li
          key={item}
          className={item === selectedSize ? 'active' : ''}
          onClick={() => handleSelect('size', item)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Size;
