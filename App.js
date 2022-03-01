import Login from "./Login";
import React, {useState} from "react";
import Profile from "./Profile";
import { LoginContext } from "./LoginContext";
import { View } from "react-native";

function App(){
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState("");
  return (
    <View className="App">
      <LoginContext.Provider value={{username , setUsername, setShowProfile}}>
        {showProfile ? <Profile /> : <Login />}
      </LoginContext.Provider>
    </View>
  );
}

export default App;