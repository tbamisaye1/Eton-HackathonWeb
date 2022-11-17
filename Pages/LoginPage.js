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
      <View style={styles.headerBar}>
        <Text style={{ fontSize: 35, fontFamily: "San Francisco" }}>
          RADIACTION
        </Text>
      </View>

      <View style={styles.form}>
        <Formik
          // style={styles.form}
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
              <Text style={{ fontSize: 22, paddingBottom: 20 }}>
                Enter your username:{" "}
              </Text>
              <TextInput
                style={styles.textInput}
                placeholder="username"
                placeholderStyle={{
                  fontFamily: "thin",
                  borderColor: "red",
                }}
                onChange={props.handleChange("username")}
                value={props.values.username}
              />

              <Button
                // style={styles.submitButton}
                style={styles.formButton}
                title="submit"
                // color="blue"
                onPress={props.handleSubmit}
              />
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    alignContent: "center",
    // justifyContent: "center",
    flexDirection: "column",
    // backgroundColor: "blue",
  },
  form: {
    width: "50%",
    // backgroundColor: "red",
    alignSelf: "center",
    height: "30%",
  },
  formButton: {
    borderRadius: 150,
    color: "blue",
  },
  textInput: {
    minHeight: "20%",
    paddingBottom: 20,
    fontSize: 30,
    fontFamily: "Inter-Black",
  },
  headerBar: {
    // flexDirection: "row",
    width: "100%",
    alignItems: "center",
    // backgroundColor: "black",
    // alignSelf: "flex-start",
    alignSelf: "flex-start",
    height: "20%",
  },
});

export default LoginPage;
