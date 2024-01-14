import { StyleSheet } from "react-native";
import { COLORS } from "./colors";

export const ButtonStyles = StyleSheet.create({
  primary: {
    width: "100%",
    backgroundColor: COLORS.BLUE,
    borderRadius: 12,
    paddingVertical: 8,
  },
  primaryLabel: {
    color: COLORS.WHITE,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing:1
},
});
