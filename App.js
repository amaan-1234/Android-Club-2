/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  return (
    <><View style={styles.container}>
      <Text>Username: </Text>
      <StatusBar style="auto" />
      <TextInput placeholder='Input Username here...' />
      <Text>Password: </Text>
        <StatusBar style="auto" />
        <TextInput placeholder='Input Password here...' secureTextEntry={true}/>
    { </View><View style={styles.container}>
        <Text>Password: </Text>
        <StatusBar style="auto" />
        <TextInput placeholder='Input Password here...' secureTextEntry={true}/>
      </View><View> }
        <Button
          title="Submit"
          onPress={() => Alert.alert('Submit Button pressed')} />
      </View></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/


import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  bg: { flex:1, paddingTop: 150, alignItems: 'center', backgroundColor: 'darkolivegreen' },
  less: { fontSize: 25, color: 'white', fontWeight: 'bold' },
  greater: { fontSize: 25, color: 'white', fontWeight: 'bold' },
  button: {
    width: 150,
    height: 50,
    alignItems: 'center',
    paddingTop: 10,
    borderRadius: 10,
    margin:5,
    backgroundColor: 'yellow'
  },
  buttonText: {
    fontSize: 25,
    color: '#000'
  }
});

class Counter extends React.Component {
  state = { count: 0 };

  setCount = () => this.setState(
    prevState => ({ ...prevState, count: this.state.count + 1 })
  )
  setCount2 = () => this.setState(
    prevState => ({ ...prevState, count: this.state.count - 1 })
  )

  render() {
    const { count } = this.state;
    return (
      <View style={[styles.bg]}>
        <View style={{ height: 100 }}>
          <Text style={count < 5 ? styles.less : styles.greater}> {count} count</Text>
        </View>
        <View style={{ height: 100 }}>
          <TouchableOpacity style={styles.button} onPress={this.setCount}>
            <Text style={styles.buttonText}>Increment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.setCount2}>
            <Text style={styles.buttonText}>Decrement</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const App = () => (
  <Counter />
);

export default App;