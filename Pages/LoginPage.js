import { useNavigation } from "@react-navigation/core";
import { Formik } from "formik";
import React, { useContext, useStat, useEffect } from "react";
import { View, StyleSheet, Text, Button, Alert } from "react-native";
import { TextInput } from "react-native-web";
import { UserContext } from "../Contexts/UserContext";
import { users } from "../dataProviders/fakeUsers";
// import {users}

// import AppText from "../../components/AppText";
// import { users } from "../dataProviders/fakeUsers";

function LoginPage({ navigation }) {
  const apiBaseUrl = "https://eton-hackathon-backend.herokuapp.com/";
  var data = {};

  const allUsers = users;
  const { user, setUser } = useContext(UserContext);
  var foundUser = false;
  async function receiveData() {
    const resp = await fetch(apiBaseUrl + "api/data/get-current-temperature");
    //replace api address
    const apiData = await resp.json();
    setUser(apiData);
    // setData(data);
    // put in the addres here
    // data = fakeData;
  }

  useEffect(() => {
    receiveData();
  });
  //   const navigation = useNavigation;

  return (
    <View style={styles.container}>
      {/* <Text> Login Page </Text>
       */}
      <Formik
        // setUser(values.username);
        // navigation.navigate("Home");
        // break;
        initialValues={{ username: "" }}
        onSubmit={(values) => {
          allUsers.forEach((userVar) => {
            if (values.username == userVar.username) {
              // ;
              // setUser(receiveData());
              // while (user == null) {
              //   foundUser = false;
              // }
              foundUser = true;

              navigation.navigate("Home");
            }
          });
          if (foundUser == false) {
            alert("You need to enter an existing username");
          }
          // alert("You need to enter an existing username");

          // users.forEach(userVar => { if (values.username == userVar.username)
        }}

        //   alert("Got here");

        //   navigation.navigate("HomePage");
        //   document.location.href = "HomePage.js";
        // console.log(values);
        // logToConsole("values: ", values);
        // nsetNewRoomTemp(values.newRoomTemp);
        //   newRoomTemp = values.newRoomTemp;
        // alert(newRoomTemp);
        //   sendData();
      >
        {(props) => (
          <View>
            <Text style={{ fontSize: 22 }}>Enter your username: </Text>
            <TextInput
              style={{ height: "90%" }}
              placeholder="username"
              onChange={props.handleChange("username")}
              value={props.values.username}
            />

            <Button
              // style={styles.submitButton}
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
