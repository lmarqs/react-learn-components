import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import rootReducer from './reducers';
import Scenery from './components/Scenery';

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <Scenery/>
  </Provider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
