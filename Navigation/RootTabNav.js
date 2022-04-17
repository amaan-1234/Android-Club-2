import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FirstScreen from "../Screen.js/FirstScreen";
import Home from "../Screen.js/Home";
import Tools from "../Screen.js/Tools";

const Tab = createBottomTabNavigator();

export default function RootTabNav(){
    return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Tools" component={Tools}/>
        <Tab.Screen name="Screen 1" component={FirstScreen} />
    </Tab.Navigator>
    );
}