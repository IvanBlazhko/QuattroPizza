import React, { useState, useMemo, useCallback } from 'react';

import { useAppDispatch } from '../../../redux/store';
import { addProduct } from '../../../redux/cartSlice/cartSlice';

import SelectorMenu from '../../selectorMenu/selectorMenu';
import ProductsModal from '../../modal/productsModal/productsModal';
import Modal from '../../modal/modal';
import { IProduct } from '../../../interfaces/IProduct';

const ProductsListItem: React.FC<IProduct> = ({
  title,
  imageUrl,
  options,
  price,
  sizes,
  ingredients,
  id,
}) => {
  const dispatch = useAppDispatch();

  const size = useMemo(() => {
    return sizes ? Object.keys(sizes) : [];
  }, [sizes]);

  const [countPrice, setCountPrice] = useState(size[0]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(
    options ? options[0] : ''
  );
  const [selectedSize, setSelectedSize] = useState(size ? size[0] : '');

  const handleSelect = useCallback(
    (type: string, value: string) => {
      if (type === 'option') return setSelectedOptions(value);
      if (type === 'size') return setSelectedSize(value);
    },
    [setSelectedOptions, setSelectedSize]
  );

  const handlePrice = useCallback(
    (opt: string) => {
      setCountPrice(opt);
    },
    [setCountPrice]
  );

  const handleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const addProductCart = () => {
    const product = {
      id,
      imageUrl,
      title,
      ingredients,
      price: Number(sizes ? sizes[countPrice] : price),
      option: selectedOptions,
      size: selectedSize,
    };
    dispatch(addProduct(product));
  };

  return (
    <div className="item-content">
      <div className="item-block">
        <img
          className="item-block__image"
          src={imageUrl}
          alt="Pizza"
          title={title}
          onClick={() => handleModal()}
        />
        <h4 className="item-block__title">{title}</h4>
        {ingredients && (
          <div className="item-block__ingredients">
            Ingredients:{' '}
            <span title={ingredients} onClick={() => handleModal()}>
              {ingredients}
            </span>
          </div>
        )}
        {(sizes || options) && (
          <SelectorMenu
            sizes={size}
            options={options}
            handlePrice={handlePrice}
            selectedOptions={selectedOptions}
            selectedSize={selectedSize}
            handleSelect={handleSelect}
          />
        )}
        <div className="item-block__bottom">
          <div className="item-block__price">
            {(sizes ? Number(sizes[countPrice]) : price).toFixed(2)} $
          </div>
          <div
            className="button button--outline button--add"
            onClick={() => addProductCart()}
          >
            <span>Add to Basket</span>
          </div>
        </div>
      </div>
      <Modal isOpen={modalIsOpen} handleModal={handleModal}>
        <ProductsModal
          title={title}
          imageUrl={imageUrl}
          ingredients={ingredients}
        />
      </Modal>
    </div>
  );
};

export default ProductsListItem;
