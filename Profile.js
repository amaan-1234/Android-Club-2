import React, {useContext} from "react";
import {Text} from "react-native";
import { LoginContext } from "./LoginContext";
function Profile(){
    const {username} = useContext(LoginContext);
    return(
        <>
        <Text>Profile</Text>
        <Text>Username: {username}</Text>
        </>

    );
    
}
export default Profile;