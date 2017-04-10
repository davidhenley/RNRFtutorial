import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import ScarletScreen from './ScarletScreen';
import GrayScreen from './GrayScreen';

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

const App = () => {
  <Router>
    <Scene key="root">
      
    </Scene>
  </Router>
};

export default App;
