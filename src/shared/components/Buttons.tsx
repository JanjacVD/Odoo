import { ButtonStyles } from "@shared/styles/buttonStyles";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

export const ButtonPrimary = ({ style, ...props }: TouchableOpacityProps ) => {
  const flattenedStyle = StyleSheet.flatten(style || {});
  return (
    <TouchableOpacity
      style={{ ...ButtonStyles.primary, ...flattenedStyle }}
      {...props}
    ><Text style={ButtonStyles.primaryLabel}>{props.children}</Text></TouchableOpacity>
  );
};
