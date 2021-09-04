
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';

const App = () => {
  const netStatus = useNetInfo();
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.textPrimary}>{netStatus.isConnected ? "Charm! You are online now." :
          "Oops! Looks like your device is not connected to the internet. Please check your network connection."}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'black'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textPrimary: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'center',
    color: 'white',

  }
});

export default App;
