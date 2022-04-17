import React from "react";
import {Text,View,StyleSheet} from 'react-native';

export default function DetailBscreen(){
    return(
        <View style={styles.container}>
            <Text style={{color:'white',fontWeight:'bold',fontSize:25}}>Detail page B</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'grey',
      alignItems: 'center',
      justifyContent: 'center',
    }
});