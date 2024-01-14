import { COLORS } from "@shared/styles/colors";
import { FormInputStyle } from "@shared/styles/inputBasedStyles";
import { Text, TextInput, TextInputProps, View } from "react-native";

type FormInputProps = {
  value: string;
  setValue(input: string): void;
  placeholder: string;
  label: string;
  error?:string
} & TextInputProps;

export default function FormInput({
  value,
  setValue,
  placeholder,
  label,
  error,
  ...props
}: FormInputProps) {
  return (
    <View style={FormInputStyle.container}>
      <Text style={FormInputStyle.label}>{label}</Text>
      <TextInput
        style={FormInputStyle.input}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        placeholderTextColor={COLORS.GRAY}
        {...props}
      />
      <Text style={FormInputStyle.error}>{error}</Text>
    </View>
  );
}
