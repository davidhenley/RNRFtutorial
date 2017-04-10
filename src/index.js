import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Text } from 'react-native';

import ScarletScreen from './ScarletScreen';
import GrayScreen from './GrayScreen';
import BlueScreen from './BlueScreen';
import MaizeScreen from './MaizeScreen';
import BlackScreen from './BlackScreen';
import GoldScreen from './GoldScreen';

const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{ color: selected ? 'red' : 'black' }}>{title}</Text>
  );
}

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="tabbar" tabs tabBarStyle={{ backgroundColor: 'white' }}>
          <Scene key="osu" title="OSU" icon={TabIcon}>
            <Scene key="scarlet" component={ScarletScreen} title="Scarlet" />
            <Scene key="gray" component={GrayScreen} title="Gray" />
          </Scene>

          <Scene key="um" title="UM" icon={TabIcon}>
            <Scene key="blue" component={BlueScreen} title="Blue" />
            <Scene key="maize" component={MaizeScreen} title="Maize" />
          </Scene>

          <Scene key="vu" title="VU" icon={TabIcon}>
            <Scene key="black" component={BlackScreen} title="Black" />
            <Scene key="gold" component={GoldScreen} title="Gold" />
          </Scene>
        </Scene>
      </Scene>
    </Router>
  );
};

export default App;
