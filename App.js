import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppText from "./components/AppText";
import HomePage from "./Pages/HomePage";
import { useEffect } from "react";
import { UserContext } from "./Contexts/UserContext";
import LoginPage from "./Pages/LogInPage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            // headerTitle: "Radiaction",
          }}
        >
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Home" component={HomePage} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <View style={styles.container}>
        {/* <AppText>Open up App.js to start working on your app!</AppText> */}

      {/* <StatusBar style="auto" /> */}
      {/* <LoginPage></LoginPage> */}
      {/* <HomePage loggedInPupil="John Doe" loggedInRoom={37}></HomePage> */}
      {/* </View> */}
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
