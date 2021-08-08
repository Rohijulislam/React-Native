import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import Mealsnavigator from './navigation/Mealsnavigator'

const App = () => {
  return (
    < Mealsnavigator />
  );

}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default App;