import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCartItems, getTotalPrice } from '../../redux/cartSlice/selectors';

import CartItem from '../../components/cartItem/cartItem';
import DeliveryForm from '../../components/form/deliveryForm';

import deliveryIcon from './img/delivery-icon.png';

import { ICartItem } from '../../interfaces/ICartItem';

const Delivery: React.FC = () => {
  const cartItems: ICartItem[] = useSelector(getCartItems);
  const totalPrice: number = useSelector(getTotalPrice);

  if (cartItems.length < 1) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container">
      <div className="cart__items">
        {cartItems.map(item => (
          <CartItem key={item.cartId} {...item} />
        ))}
        <hr />
        <div className="cart__total ">
          Total Price: {totalPrice.toFixed(2)} $
        </div>
      </div>
      <div className="delivery__content">
        <img src={deliveryIcon} alt="delivery icon" />
        <div className="delivery__title">Contacts for delivery:</div>
      </div>
      <DeliveryForm />
    </div>
  );
};

export default Delivery;
