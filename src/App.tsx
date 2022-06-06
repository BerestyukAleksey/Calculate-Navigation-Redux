import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import {CalculateWindow} from './ui';

export const App = () => {
  return (
    <Provider store={store}>
      <CalculateWindow />
    </Provider>
  );
};
