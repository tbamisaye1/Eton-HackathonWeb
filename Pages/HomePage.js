import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import AppText from "../components/AppText";
// import {Formik}
import { useState } from "react";
import { Formik } from "formik";
import { logToConsole } from "react-native/Libraries/Utilities/RCTLog";

export default function HomePage() {
  var [pupil, setPupil] = useState();
  const [roomNo, setRoomNo] = useState(23);
  const [roomTemp, setRoomTemp] = useState(20);
  var [newRoomTemp, setNewRoomTemp] = useState(0);

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

  return (
    <View style={styles.screen}>
      <View style={styles.headerBar}>
        <View style={styles.headerLeft}>
          <Text style={{ fontSize: 30 }}>{pupil}</Text>
        </View>
        <View style={styles.headerRight}>
          <Text style={{ fontSize: 30 }}> Room: {roomNo}</Text>
        </View>
      </View>
      <View style={[styles.infoContainer, { backgroundColor: "red" }]}>
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
                <TextInput
                  placeholder="Room temperature You want in degrees"
                  onChange={props.handleChange("newRoomTemp")}
                  value={props.values.newRoomTemp}
                />

                <Button
                  title="submit"
                  color="blue"
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
        <View style={styles.infoView}>2</View>
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
    alignSelf: "flex-start",
    width: "50%",
    backgroundColor: "grey",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  headerRight: {
    alignSelf: "flex-end",
    width: "50%",
    backgroundColor: "red",
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
    backgroundColor: "yellow",
  },
  infoContainer: {
    height: "45%",
    width: "100%",
    backgroundColor: "green",
  },
  infoView: {
    flex: 1,
    backgroundColor: "#fff",
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
});