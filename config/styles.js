import { Platform } from "react-native";

import colors from "./colors";

export default {
  colors,
  boldBigTitle: {
    color: colors.primaryText,
    fontSize: 50,
    fontWeight: "bold",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },

  boldMediumTitle: {
    color: colors.primaryText,
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },

  closeButton: { backgroundColor: "red" },

  dangerButton: { backgroundColor: colors.danger, color: colors.white },

  headingText: {
    color: colors.primaryText,
    fontSize: 24,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },

  secondaryButton: {
    backgroundColor: "white",
    color: colors.primary,
  },

  smallText: {
    color: colors.primaryText,
    fontSize: 16,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },

  switchView: {
    alignSelf: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "#000000",
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  twoColumnView: {
    flexDirection: "row",
  },
  twoColumnViewPartLeft: {
    paddingRight: 5,
    width: "50%",
  },
  twoColumnViewPartRight: {
    paddingLeft: 5,
    width: "50%",
  },
  viewContainer: {
    flex: 1,
    padding: 5,
  },
};
