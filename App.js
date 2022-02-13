import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {View, Text, SafeAreaView, TextInput, ScrollView, StyleSheet,TouchableOpacity, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
export default function Home() {
  const styles = StyleSheet.create({
    container:{
    backgroundColor:'#f7f7f7',
    marginTop:20,
  },
  headerWrapper:{
    backgroundColor:'#5566ee',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginTop:20,
  },
  header:{
    padding:20,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:20,
  },
  iconWhite:{
    color:'#fff',
  },
  headerText:{
    fontWeight:'bold',
    color:'#fff',
    fontSize:18,
  },
  splash:{
    paddingTop:60,
    paddingBottom:160,
    alignItems:'center',
  },
  content:{
    marginHorizontal:20,
    paddingHorizontal:20,
    backgroundColor:'#fff',
    borderRadius:15,
    marginTop:-60,
  },
  title:{
    fontWeight:'bold',
    fontSize:18,
    color:'#2d2d2d',
    paddingVertical:20,
  },
  input:{
    fontWeight:'500',
    borderBottomWidth: 2,
    fontSize:16,
    marginBottom:20,
    paddingVertical:20,
  },
  description:{
    color:"#989898",
    textAlign:"center",
    fontSize:18,
    padding:20,
    fontWeight:'500',
  },
  buttonWrapper:{
    alignItems:"center",
    marginVertical:30,
  },
  button:{
    alignItems:"center",
    justifyContent:'center',
    backgroundColor:'#4355ee',
    width:50,
    height:50,
    borderRadius:50,
  },
  iconButton:{
    color:'#fff',
  },


  })
  return (
    <ScrollView>
    <View style={styles.container}>
      <SafeAreaView style={styles.headerWrapper}>
        <View style={styles.header}>
          <View>
            <Icon name="chevron-left" size={24} style={styles.iconWhite}></Icon>
          </View>
          <View>
            <Text style={styles.headerText}>Send Code</Text>
          </View>
          <View 
          style={{
            width:20,
          }}/>
    </View>
    </SafeAreaView>
    <View style={styles.content}>
      <View>
        <Text style={styles.title}>Login Page &gt;</Text>
      </View>
      <View>
        <TextInput
        style={styles.input}
         placeholder="Your Phone Number" 
         placeholderTextColor='#ababab'/>
      </View>
      <View>
        <Text style={styles.description}>We will send an OTP to verify.</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.button}>
          <Icon name="arrow-right" size={25} style={styles.iconButton} />
        </TouchableOpacity>
      </View>
      <View>
      <View>
          <ActivityIndicator />
          <ActivityIndicator size="large" color="#000" />
        </View>
        <View>
        
        <Text style={{ fontSize: 80 }}>What do you want to do?</Text>
    <Text style={{ fontSize: 80 }}>1. Deposit</Text>
    <Text style={{ fontSize: 70 }}>2. Withdraw</Text>
    <Text style={{ fontSize: 80 }}>3. Check Balance</Text>
        </View>
      </View>
    </View>
    </View>
    </ScrollView>
  );
}
      