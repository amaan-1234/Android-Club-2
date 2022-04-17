import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailAscreen from "./DetailA";
import DetailBscreen from "./DetailB";

const stack=createNativeStackNavigator();

export default function DetailScreen(){
    return(
        <stack.Navigator initialRouteName="pageA">
            <stack.Screen name="pageA" component={DetailAscreen}/>
            <stack.Screen name="pageB" component={DetailBscreen}/>
        </stack.Navigator>
    );
}