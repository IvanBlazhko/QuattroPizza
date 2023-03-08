import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';
import { persist } from './redux/store';
import { store } from './redux/store';

import App from './App/App';
import './scss/app.scss';

const rootElement = document.getElementById('root')!;

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <BrowserRouter basename="QuattroPizza">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persist}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}
