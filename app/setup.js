import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';

import App from './App';
import configureStore from './configureStore';
import store from './configureStore';

const AppContainer = createAppContainer(App);

export default class Root extends Component {
  render() {
    return <Provider store={store}><AppContainer /></Provider>
  }
}
