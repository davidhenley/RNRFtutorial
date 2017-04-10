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
    backgroundColor: '#000000'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white'
  }
});

const BlackScreen = () => {
  const { container, welcome } = styles;
  return (
    <View style={container}>
      <Text style={welcome} onPress={() => Actions.gold()}>
        Black Screen
      </Text>
    </View>
  );
};

export default BlackScreen;
