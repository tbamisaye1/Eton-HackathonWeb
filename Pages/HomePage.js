import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import AppText from "../components/AppText";
import { fakeData } from "../dataProviders/fakePicoData";
// import {Formik}
import { useState, useContext } from "react";
import { Formik } from "formik";
import { logToConsole } from "react-native/Libraries/Utilities/RCTLog";
import { UserContext } from "../Contexts/UserContext";

export default function HomePage(props) {
  // var
  var data = fakeData;
  var [pupil, setPupil] = useState(props.loggedInPupil);
  var [roomNo, setRoomNo] = useState(props.loggedInRoom);
  var [roomTemp, setRoomTemp] = useState(data.currentTemp);
  var [targetRoomTemp, setTargetRoomTemp] = useState(data.targetTemp);
  var [newRoomTemp, setNewRoomTemp] = useState(0);
  // pupil = "pupil changed inside";
  const { user, setUser } = useContext(UserContext);

  async function sendData() {
    try {
      await fetch("https://webhook.site/b815d5d1-7adf-405d-b628-31b27154d669", {
        method: "post",
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "appliction/json",
        },
        body: JSON.stringify({
          Name: pupil,
          roomNo: roomNo,
          newRoomTemp: newRoomTemp,
        }),
      });
    } catch (e) {}
  }

  async function receiveData() {}

  return (
    <View style={styles.screen}>
      <View style={styles.headerBar}>
        <View style={styles.headerLeft}>
          <Text style={{ fontSize: 30 }}> Student: {user}</Text>
        </View>
        <View style={styles.headerRight}>
          <Text style={{ fontSize: 30 }}> Room: {roomNo}</Text>
        </View>
      </View>
      <View style={[styles.infoContainer, {}]}>
        <View style={styles.tempHeader}>
          <Text style={styles.bigTempText}>Current: {roomTemp}°C</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoView}>
          {/* <AppText>1</AppText> */}
          <Formik
            initialValues={{ newRoomTemp: 0 }}
            onSubmit={(values) => {
              // console.log(values);
              // logToConsole("values: ", values);
              // nsetNewRoomTemp(values.newRoomTemp);
              newRoomTemp = values.newRoomTemp;
              // alert(newRoomTemp);
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
                  onChange={props.handleChange("newRoomTemp")}
                  value={props.values.newRoomTemp}
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
            onChangeText={(text) => setNewRoomTemp({ newRoomTemp: text })}
          /> */}
        </View>
        <View style={styles.infoView}>
          <Text style={{ fontSize: 30 }}>
            Target Room Temperature: {targetRoomTemp} °C
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
