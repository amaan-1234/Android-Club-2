import React from "react";
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native';

export default function Homescreen({navigation}){
    return(
        <View style={styles.container}>
            <Text style={{color:'white',fontWeight:'bold',fontSize:25}}>You are in home screen</Text>
            <TouchableOpacity  onPress={()=>navigation.navigate('Details')} style={styles.design1}>
                <View>
                    <Text style={{fontSize:20,color:'white'}}>Details screen</Text>
                </View>
             </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'grey',
      alignItems: 'center',
      justifyContent: 'center',
    },
    design1:{
        width:200,
        height:75,
        margin:10,
        justifyContent:'center',
        alignItems:'center',
        borderTopRightRadius:20,
        borderBottomLeftRadius:20,
        padding:10,
        borderRadius:100,
        backgroundColor:'coral'
      }
  });