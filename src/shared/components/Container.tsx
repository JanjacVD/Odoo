import { height, width } from "@shared/lib/dimensions";
import {
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  ViewStyle,
} from "react-native";
import {
  SafeAreaView,
  SafeAreaViewProps,
} from "react-native-safe-area-context";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={-80}
      style={{ flex: 1 }}
    >
      <Pressable onPress={Keyboard.dismiss}>
        <SafeAreaView
          style={{
            width: width,
            height: height,
            position: "relative",
          }}
        >
          {children}
        </SafeAreaView>
      </Pressable>
    </KeyboardAvoidingView>
  );
}
export function UnmovableContainer({
  children,
  style,
  ...props
}: SafeAreaViewProps) {
  const flattenedStyle = StyleSheet.flatten(style || {});
  return (
    <Pressable onPress={Keyboard.dismiss}>
      <SafeAreaView
        style={{
          width: width,
          height: height,
          ...flattenedStyle,
        }}
        {...props}
      >
        {children}
      </SafeAreaView>
    </Pressable>
  );
}
