import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppText from "./components/AppText";
import HomePage from "./Pages/HomePage";
import { useEffect } from "react";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <AppText>Open up App.js to start working on your app!</AppText> */}

      <StatusBar style="auto" />
      <HomePage loggedInPupil="John Doe" loggedInRoom={37}></HomePage>
    </View>
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
