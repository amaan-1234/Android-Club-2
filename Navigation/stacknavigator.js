import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailAscreen from '../Screens/DetailScreen/DetailA';
import DetailBscreen from '../Screens/DetailScreen/DetailB';
import DetailScreen from '../Screens/DetailScreen';
import Homescreen from '../Screens/HomeScreen';

const stack=createNativeStackNavigator();

export default function Stacknavigator() {
  return (
      <stack.Navigator>
       <stack.Screen name='Home' component={Homescreen}></stack.Screen>
      <stack.Screen name='Details' component={DetailScreen}></stack.Screen>
      </stack.Navigator>
  );
}