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
    backgroundColor: '#bb0000'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center'
  }
});

const ScarletScreen = () => {
  const { container, welcome } = styles;
  return (
    <View style={container}>
      <Text style={welcome}>
        Scarlet Screen
      </Text>
    </View>
  );
};

export default ScarletScreen;
