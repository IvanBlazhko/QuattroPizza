import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const ProductsLoader: React.FC = () => {
  return (
    <div className="content__loader">
      <ClipLoader size={150} color="#000000" />
    </div>
  );
};

export default ProductsLoader;
