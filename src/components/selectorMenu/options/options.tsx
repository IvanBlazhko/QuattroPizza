import React from 'react';

interface IProps {
  options: string[];
  selectedOptions: string;
  handleSelect: (type: string, value: string) => void;
}

const Options: React.FC<IProps> = ({
  options,
  selectedOptions,
  handleSelect,
}) => {
  return (
    <ul>
      {options.map(item => (
        <li
          key={item}
          className={item === selectedOptions ? 'active' : ''}
          onClick={() => handleSelect('option', item)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Options;
