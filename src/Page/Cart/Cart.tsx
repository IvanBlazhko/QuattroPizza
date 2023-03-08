import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CartItem from '../../components/cartItem/cartItem';

import { getCartItems, getTotalPrice } from '../../redux/cartSlice/selectors';
import { ICartItem } from '../../interfaces/ICartItem';

import cartIcon from './img/cart-icon.png';
import cartClear from './img/cart-clear.png';

const Cart: React.FC = () => {
  const cartItems: ICartItem[] = useSelector(getCartItems);
  const totalPrice: number = useSelector(getTotalPrice);

  return (
    <div className="container">
      {cartItems.length > 0 ? (
        <div className="cart__wrapper">
          <div className="cart__content--top">
            <img src={cartIcon} alt="cart" />
            <h2 className="cart__title">Cart:</h2>
          </div>
          <div className="cart__items">
            {cartItems.map(item => (
              <CartItem key={item.cartId} {...item} />
            ))}
          </div>
          <hr />
          <div className="cart__total">
            <div>Total Price: {totalPrice.toFixed(2)} $</div>
            <Link to="/delivery" className="cart__btn">
              Go to pay
            </Link>
          </div>
        </div>
      ) : (
        <div className="cart__clear">
          <div className="cart__clear--body">
            <div className="cart__clear--title">Cart is empty 😕</div>
            <div className="cart__clear--subtitle">
              Add a product to checkout, delicious pizza is waiting for you!
            </div>
            <div className="cart__clear--img">
              <img src={cartClear} alt="clear" />
            </div>
            <Link to="/" className="cart__clear--btn">
              Go to Pizza
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
