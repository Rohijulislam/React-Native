import React from 'react';
//import React in our code.
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
//import all the components we are going to use.
import { getDataUsingSimpleGetCall, postDataUsingSimplePostCall, multipleRequestsInSingleCall } from './ApiHelper'

const App = () => {

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, textAlign: 'center' }}>
        Example of Axios Networking in React Native Using Async Await
      </Text>
      {/*Running GET Request*/}


      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={getDataUsingSimpleGetCall}>
        <Text style={styles.textStyle}>Get Data</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={postDataUsingSimplePostCall}>
        <Text style={styles.textStyle}>Post Data</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={multipleRequestsInSingleCall}>
        <Text style={styles.textStyle}>Multiple Concurrent Get Requests</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    padding: 16,
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '100%',
    marginTop: 16,
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default App;