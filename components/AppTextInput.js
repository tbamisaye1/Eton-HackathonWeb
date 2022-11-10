import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import { NONE } from "apisauce";

function AppTextInput({
  icon,
  width = "100%",
  placeholder,
  style,
  onChangeText,
  value,
  iconSize = 30,
  iconUseFontAwesome5 = 0,
  ...otherProps
}) {
  return (
    <View style={[styles.container, { width }, style]}>
      {icon && iconUseFontAwesome5 == 1 ? (
        <FontAwesome5
          name={icon}
          size={iconSize}
          color={defaultStyles.colors.darkGrey}
          style={styles.icon}
        />
      ) : (
        <MaterialCommunityIcons
          name={icon}
          size={iconSize}
          color={defaultStyles.colors.darkGrey}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.mediumGrey}
        style={[defaultStyles.text, styles.text]}
        placeholder={placeholder}
        {...otherProps}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.lightGrey,
    borderColor: defaultStyles.colors.darkGrey,
    borderRadius: 15,

    flexDirection: "row",
    justifyContent: "center",
    // marginRight: 80,
    // marginLeft: 80,
    // minHeight: 60,
    alignSelf: "center",
    width: "100%",
    // margin: 150,
    padding: 15,
    marginVertical: 10,
    // marginLeft: 10,
    // marginRight: 10
    //paddingHorizontal: 50,
    // overflow: "hidden",
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1, //This line is important to Avoid Lag in the text fields
  },
});

export default AppTextInput;
