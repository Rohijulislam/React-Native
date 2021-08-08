import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import RootNavigator from './navigation/RootNavigator';
import { Provider } from 'react-redux';
import { store } from './store/rootStore';
const App = () => {

  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
