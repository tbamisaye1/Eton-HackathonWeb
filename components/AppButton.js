import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../config/colors";
function AppButton({ title, onPress, style, colorPaletteName = "primary" }) {
  return (
    <View style={{ width: "100%", paddingHorizontal: 0 }}>
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: colors[colorPaletteName] },
          style,
        ]}
        onPress={onPress}
      >
        <Text
          style={[
            styles.text,
            {
              color: style
                ? style.backgroundColor == colors.primary
                  ? colors.white
                  : style.backgroundColor == colors.danger
                  ? colors.white
                  : colors.primary
                : colors.white,
            },
          ]}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 15,
    marginTop: 10,
    marginBottom: 10,

    // marginLeft: 10,
    // marginRight: 10,
  },
  text: {
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
