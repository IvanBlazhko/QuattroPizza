import React, { useEffect } from 'react';
import { useAppDispatch } from '../../redux/store';

import { setCount, removeProduct } from '../../redux/cartSlice/cartSlice';

import { ICartItem } from '../../interfaces/ICartItem';

const CartItem: React.FC<ICartItem> = ({
  title,
  imageUrl,
  ingredients = '',
  price,
  count,
  cartId,
  size = '',
  option = '',
}) => {
  const dispatch = useAppDispatch();

  const handleCount = (action: string) => {
    dispatch(setCount({ action, cartId }));
  };

  useEffect(() => {
    if (count === 0) {
      dispatch(removeProduct(cartId));
    }
  }, [count, cartId, dispatch]);

  return (
    <div className="cart__item--wrapper">
      <div className="close">
        <div className="close__btn"></div>
      </div>
      <div className="cart__item--content">
        <div className="cart__item--img">
          <img src={imageUrl} alt={`product ${title}`} />
        </div>
        <div className="cart__item--content-top">
          <div className="cart__item--text">
            <div className="cart__item--title">{title}</div>
            {ingredients.length > 0 && (
              <div className="cart__item--subtext">
                <>Ingredients: {ingredients}</>
              </div>
            )}
            <div className="cart__item--subtext">
              <div>
                {size.length > 0 && (
                  <>
                    <span>Size:</span> {size}
                  </>
                )}
              </div>
              <div>
                {option.length > 0 && (
                  <>
                    <span>Option:</span> {option}
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="content__bottom">
            <div className="cart__item--counter counter">
              <div
                className="counter__btn"
                onClick={() => handleCount('decrement')}
              >
                -
              </div>
              <div className="counter__title">{count}</div>
              <div
                className="counter__btn"
                onClick={() => handleCount('increment')}
              >
                +
              </div>
            </div>
            <div className="cart__item--price">
              {(price * count).toFixed(2)} $
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
