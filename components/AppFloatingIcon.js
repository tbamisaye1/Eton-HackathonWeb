import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";

import AppView from "./AppView";
import AppIconClickAble from "./AppIconClickAble";
import defaultStyles from "../config/styles";

const { height, width } = Dimensions.get("window");
const floatingIconMarginTop = 0.8 * height;

function AppFloatingIcon({
  iconName = "plus-box-multiple",
  onPress,
  size = 70,
  visible = true,
  opacity = 0.7,
}) {
  return (
    <AppView style={styles.floatingIcon} hide={!visible}>
      <AppIconClickAble
        name={iconName}
        size={size}
        backgroundColor={defaultStyles.colors.lightDanger}
        iconRatio={0.7}
        onPress={onPress}
        opacity={opacity}
      />
    </AppView>
  );
}

const styles = StyleSheet.create({
  container: {},
  floatingIcon: {
    position: "absolute",
    // width: "100%",
    // backgroundColor: "red",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    alignSelf: "flex-end",
    // marginBottom: "50%",
    marginTop: floatingIconMarginTop,
    marginRight: 200,
    padding: 10,
    // marginTop: 600,
    // marginBottom: "90%",
    // width: "100%",
    // height: "88%",
    // flex: 1,
  },
});

export default AppFloatingIcon;
