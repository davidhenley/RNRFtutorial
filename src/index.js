import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center'
  }
});

export default class App extends Component {
  render() {
    const { container, welcome } = styles;
    return (
      <View style={container}>
        <Text style={welcome}>Hello</Text>
      </View>
    );
  }
}
