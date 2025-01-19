// 

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import { fetchCountriesAction } from './store/api-actions';
// import { fetchEuropeAction } from './store/api-actions';
// import { fetchAsiaAction } from './store/api-actions';
import './index.css';
import App from './components/App/App';

// store.dispatch(fetchEuropeAction());
// store.dispatch(fetchAsiaAction());
store.dispatch(fetchCountriesAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App /> 
    </Provider>
  </React.StrictMode>
);

