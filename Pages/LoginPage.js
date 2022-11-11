import { useNavigation } from "@react-navigation/core";
import { Formik } from "formik";
import React, { useContext } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { TextInput } from "react-native-web";
import { UserContext } from "../Contexts/UserContext";

// import AppText from "../../components/AppText";

function LoginPage({ navigation }) {
  const { user, setUser } = useContext(UserContext);
  //   const navigation = useNavigation;

  return (
    <View style={styles.container}>
      {/* <Text> Login Page </Text>
       */}
      <Formik
        initialValues={{ name: "" }}
        onSubmit={(values) => {
          setUser(values.name);
          //   alert("Got here");
          navigation.navigate("Home");
          //   navigation.navigate("HomePage");
          //   document.location.href = "HomePage.js";
          // console.log(values);
          // logToConsole("values: ", values);
          // nsetNewRoomTemp(values.newRoomTemp);
          //   newRoomTemp = values.newRoomTemp;
          // alert(newRoomTemp);
          //   sendData();
        }}
      >
        {(props) => (
          <View>
            <Text style={{ fontSize: 22 }}>Enter your Name : </Text>
            <TextInput
              style={{ height: "90%" }}
              placeholder="Name"
              onChange={props.handleChange("name")}
              value={props.values.name}
            />

            <Button
              style={styles.submitButton}
              title="submit"
              // color="blue"
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default LoginPage;
