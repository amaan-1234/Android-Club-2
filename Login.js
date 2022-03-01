import React,{ useContext}  from "react";
import { TextInput , Button, View, StyleSheet} from "react-native";
import { LoginContext } from "./LoginContext";
function Login(){
    const styles = StyleSheet.create({
        container:{
        backgroundColor:'#954321',
        marginTop:100,
        alignItems:"center",
        padding:20,
      },
      container2:{
        backgroundColor:'#954321',
        marginTop:10,
        alignItems:"center",
        padding:20,
      },
      container3:{
        marginTop:10,
        alignItems:"center",
        padding:20,
      },
    })
    const {setUsername, setShowProfile} = useContext(LoginContext);
    return(
        <>
        <View style={styles.container}>
        <TextInput
         type = "text"
         placeholder="Username..."
         onChange={(val) => {
            setUsername(val);
         }}
        />
        </View>
        <View style={styles.container2}>
        <TextInput type="text" placeholder="Password..." />
        </View>
        <View style={styles.container3}>
        <Button
         onPress={() => {
            setShowProfile(true);
        }}
        title="Press Me!"
        />
        </View>

        </>
    );
}
export default Login;