import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DetailScreen from '../Screens/DetailScreen.js';
import Homescreen from '../Screens/HomeScreen';
import MainScreen from '../Screens/MainScreen';

const draw=createDrawerNavigator();

export default function Drawernavigator(){
    return(
        <draw.Navigator initialRouteName='Home'>
            <draw.Screen name='welcome' component={MainScreen}></draw.Screen>
            <draw.Screen name='Home' component={Homescreen}></draw.Screen>
            <draw.Screen name='Details' component={DetailScreen}></draw.Screen>
        </draw.Navigator>
    );
}