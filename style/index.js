//
// Stylesheet for Dharma Mobile.
//

import { StyleSheet } from "react-native";
import theme from "./theme";

// Keys within each style must be sorted. Styles within the stylesheet must be in a logical order,
// grouped by purpose, but not necessarily sorted (use "eslint-disable-line sort-keys" where
// needed).
/* eslint sort-keys: "error" */

module.exports = StyleSheet.create({
  button: {
    color: theme.color.brandPrimary,
    alignItems: "center",
    flexDirection: "row",
    height: 40,
    justifyContent: "center",
    margin: 8,
    marginTop: 25,
    padding: 8,
    width: 100,
  },
});
