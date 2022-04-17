import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DetailScreen from '../Screens/DetailScreen.js';
import Homescreen from '../Screens/HomeScreen';

const tab=createBottomTabNavigator();

export default function Tabnavigator(){
    return(
        <tab.Navigator>
            <tab.Screen name='Home' component={Homescreen}></tab.Screen>
            <tab.Screen name='Details' component={DetailScreen}></tab.Screen>
        </tab.Navigator>
    );
}