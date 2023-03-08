import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { changeTitle } from '../helpers/changeTitle';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import Wrapper from '../components/wrapper/wrapper';
import ProductsLoader from '../components/loader/productsLoader';

const Pizza = lazy(() => import('../Page/Pizza/pizza'));
const Desserts = lazy(() => import('../Page/Desserts/desserts'));
const Drinks = lazy(() => import('../Page/Drinks/drinks'));
const NotFound = lazy(() => import('../Page/404/notFound'));
const Cart = lazy(() => import('../Page/Cart/Cart'));
const Delivery = lazy(() => import('../Page/Delivery/delivery'));

export const App: React.FC = () => {
  useEffect(() => {
    changeTitle();
  }, []);

  return (
    <>
      <Suspense fallback={<ProductsLoader />}>
        <Routes>
          <Route path="/" element={<Wrapper />}>
            <Route index element={<Pizza />} />
            <Route path="desserts" element={<Desserts />} />
            <Route path="drinks" element={<Drinks />} />
            <Route path="cart" element={<Cart />} />
            <Route path="delivery" element={<Delivery />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
};

export default App;
