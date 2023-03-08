import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { getCartItems, getTotalPrice } from '../../redux/cartSlice/selectors';

import { ICartItem } from '../../interfaces/ICartItem';

const Basket: React.FC = () => {
  const cartItems: ICartItem[] = useSelector(getCartItems);
  const totalPrice: number = useSelector(getTotalPrice);

  return (
    <Link to="cart" className="header__cart">
      <span className="button button--cart">
        <span>{totalPrice.toFixed(2)} $</span>
        <div className="button__delimiter"></div>
        <span>{cartItems.length}</span>
      </span>
    </Link>
  );
};

export default Basket;
