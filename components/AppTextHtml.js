import React from "react";
import { View } from "react-native";
import HTML from "react-native-render-html";

//TODO: WORK IN PROGRES

import defaultStyles from "../config/styles";
function AppTextHtml({ children, htmlText, style, ...otherProps }) {
  const htmlContent1 = `
    <h1>This HTML snippet is now rendered with native components !</h1>
    <h2>Enjoy a webview-free and blazing fast application</h2>
    <img src="https://i.imgur.com/dHLmxfO.jpg?2" />
    <em style="textAlign: center;">Look at how happy this native cat is</em>
`;
  //const htmlContent = { children: { children } };
  console.log("style", style);
  return (
    <View style={[{ flex: 1, width: "100%" }, style]}>
      <HTML
        source={{ html: htmlText }}
        classesStyles={[{ width: "100%" }, style]}
        {...otherProps}
      />
    </View>

    // <Text style={[defaultStyles.text, style]} {...otherProps}>
    //   {children}
    // </Text>
  );
}

export default AppTextHtml;
