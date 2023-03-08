import React from 'react';

interface IProps {
  title: string;
  imageUrl: string;
  ingredients: string;
}

const ProductsModal: React.FC<IProps> = ({ title, imageUrl, ingredients }) => {
  return (
    <div className="modal-product__body">
      <h2 className="modal-product__title">{title}</h2>
      <div className="modal-product__img">
        <img src={imageUrl} alt="product" />
      </div>
      {ingredients && (
        <h3 className="modal-product__ingredients">
          Ingredients: {ingredients}
        </h3>
      )}
    </div>
  );
};

export default ProductsModal;
