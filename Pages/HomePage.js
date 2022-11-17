import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import AppText from "../components/AppText";
import { fakeData } from "../dataProviders/fakePicoData";
// import {Formik}
import { useState, useContext, useEffect } from "react";
import { Formik } from "formik";
import { logToConsole } from "react-native/Libraries/Utilities/RCTLog";
import { UserContext } from "../Contexts/UserContext";

export default function HomePage(props) {
  const apiBaseUrl = "https://eton-hackathon-backend.herokuapp.com/";
  var data = {};
  const { user, setUser } = useContext(UserContext);
  var [pupil, setPupil] = useState(user);
  var [roomNumber, setroomNumber] = useState(props.loggedInRoom);
  var [currentTemperature, setcurrentTemperature] = useState(data.currentTemp);
  var [targetcurrentTemperature, setTargetcurrentTemperature] = useState(
    data.targetTemp
  );
  var [targetTemperature, settargetTemperature] = useState(
    data.targetTemperature
  );
  // pupil = "pupil changed inside";
  // useEffect(() => {
  //   receiveData();
  // });
  async function sendData() {
    try {
      // await fetch(apiBaseUrl + "/api/data/store-initial-data", {
      //   // fake URL: https://webhook.site/b815d5d1-7adf-405d-b628-31b27154d669
      //   // replace the address in the webhook function
      //   method: "post",
      //   mode: "no-cors",
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "appliction/json",
      //   },
      //   body: JSON.stringify({
      //     username: user.username,
      //     roomNumber: user.roomNumber,
      //     targetTemperature: targetTemperature,
      //   }),
      // });
      await fetch(apiBaseUrl + "api/data/update-target-temperature", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user.username,
          // roomNumber: user.roomNumber,
          targetTemperature: targetTemperature,
        }),
      });
      alert(
        "Great Success, it didnt fail on send (dunno if it actually sent the data to the right place tho)"
      );
    } catch (e) {
      alert("Unfortunately something went wrong. Retry or Try Again later");
    }
  }

  // async function receiveData() {
  //   const resp = await fetch(apiBaseUrl + "api/data/get-current-temperature");
  //   //replace api address
  //   const apiData = await resp.json();
  //   data = apiData;
  //   // setData(data);
  //   // put in the addres here
  //   // data = fakeData;
  // }

  return (
    <View style={styles.screen}>
      <View style={styles.headerBar}>
        <View style={styles.headerLeft}>
          <Text style={{ fontSize: 30 }}> Student: {user.username}</Text>
        </View>
        <View style={styles.headerRight}>
          <Text style={{ fontSize: 30 }}> Room: {user.roomNumber}</Text>
        </View>
      </View>
      <View style={[styles.infoContainer, {}]}>
        <View style={styles.tempHeader}>
          <Text style={styles.bigTempText}>
            {/* Current: {data.currentTemperature}°C */}
            Current Room Temperature: {user.currentTemperature}
          </Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoView}>
          {/* <AppText>1</AppText> */}
          <Formik
            initialValues={{ targetTemperature: 0 }}
            onSubmit={(values) => {
              // console.log(values);
              // logToConsole("values: ", values);
              // nsettargetTemperature(values.targetTemperature);
              targetTemperature = values.targetTemperature;
              // alert(targetTemperature);
              sendData();
            }}
          >
            {(props) => (
              <View>
                <Text style={{ fontSize: 22 }}>
                  Enter your desired Room Temperature:{" "}
                </Text>
                <TextInput
                  style={{ height: "90%" }}
                  placeholder="Room temperature You want in degrees"
                  onChange={props.handleChange("targetTemperature")}
                  value={props.values.targetTemperature}
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
          {/* <Text>Enter the room temperature You want: </Text>
          <TextInput
            placeholder="Enter the Room  temperature in celsius"
            onChangeText={(text) => settargetTemperature({ targetTemperature: text })}
          /> */}
        </View>
        <View style={styles.infoView}>
          <Text style={{ fontSize: 30 }}>
            Target Room Temperature: {user.targetTemperature} °C
          </Text>
        </View>
      </View>
      {/* <View style={styles.container}>
        <AppText>This the Home Page speaking</AppText>
    
        <StatusBar style="auto" />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  headerLeft: {
    margin: 10,
    alignSelf: "flex-start",
    width: "48%",
    // backgroundColor: "grey",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  headerRight: {
    margin: 10,
    alignSelf: "flex-end",
    width: "48%",
    // backgroundColor: "red",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  headerBar: {
    flexDirection: "row",
    width: "100%",
    // backgroundColor: "black",
    alignSelf: "flex-start",
  },
  screen: {
    flexDirection: "column",
    flex: 1,
    width: "100%",
  },
  imageContainer: {
    height: "30%",
    width: "100%",
    // backgroundColor: "yellow",
  },
  infoContainer: {
    height: "45%",
    width: "100%",
    // backgroundColor: "green",
  },
  infoView: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tempHeader: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "grey",
    margin: "100px",
    width: "50%",
    borderRadius: 30,
  },
  bigTempText: {
    fontSize: 40,
    fontFamily: "Inter-Black",
    alignSelf: "center",
  },
  submitButton: {
    borderRadius: 150,
    color: "grey",
  },
});
