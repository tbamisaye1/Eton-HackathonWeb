import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppText from "./components/AppText";
import HomePage from "./Pages/HomePage";
import { useEffect } from "react";
import { UserContext } from "./Contexts/UserContext";

export default function App() {
  const [user, setUser] = useState("Hi this is the use state");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <View style={styles.container}>
        {/* <AppText>Open up App.js to start working on your app!</AppText> */}

        <StatusBar style="auto" />
        <HomePage loggedInPupil="John Doe" loggedInRoom={37}></HomePage>
      </View>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
