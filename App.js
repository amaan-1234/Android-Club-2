/*import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Drawnavigator from './Navigation/drawernavigator';

export default function App() {
  return (
    <NavigationContainer>
       <Drawnavigator/>
    </NavigationContainer>
  );
}*/


/*
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootDrawNav from './Navigation/RootDrawNav';

export default function App() {
  return (
      <NavigationContainer>
        <RootDrawNav/>
      </NavigationContainer>
  );
}*/

import React, {Component} from 'react';
import TabScreen from './src/screens/TabScreen.js';

export default class App extends Component {
  render() {
    return (
      <TabScreen/>
    );
  }
}
