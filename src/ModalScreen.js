import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF8200'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center'
  }
});

const Modal = () => {
  const { container, welcome } = styles;
  return (
    <View style={container}>
      <Text style={welcome} onPress={() => Actions.pop()}>
        Modal
      </Text>
    </View>
  );
};

export default Modal;
