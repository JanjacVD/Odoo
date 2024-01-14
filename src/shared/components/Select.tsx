import { FormInputStyle } from "@shared/styles/inputBasedStyles";
import { Text, TouchableOpacity, View } from "react-native";
import useModal from "./Modal";
import { FlashList } from "@shopify/flash-list";
import { width } from "@shared/lib/dimensions";
type SelectProps<T> = {
  value: T;
  placeholder: string;
  label: string;
  error?: string;
} & SelectListProps<T>;
type SelectListProps<T> = {
  data: T[];
  setValue(input: T): void;
  renderValue(input: T): string;
};
export default function Select<T>({
  value,
  data,
  setValue,
  renderValue,
  placeholder,
  label,
  error,
}: SelectProps<T>) {
  const { Modal, showModal, hideModal } = useModal();
  const handleSelect = (input: T) => {
    setValue(input);
    hideModal();
  };
  return (
    <View style={FormInputStyle.container}>
      <Text style={FormInputStyle.label}>{label}</Text>
      <TouchableOpacity onPress={showModal} style={FormInputStyle.select}>
        <Text
          style={
            value ? FormInputStyle.selectValue : FormInputStyle.placeholder
          }
        >
          {value ? renderValue(value) : placeholder}
        </Text>
      </TouchableOpacity>
      <Text style={FormInputStyle.error}>{error}</Text>
      <Modal>
        <SelectList
          data={data}
          renderValue={renderValue}
          setValue={handleSelect}
        />
      </Modal>
    </View>
  );
}
function SelectList<T>({ data, renderValue, setValue }: SelectListProps<T>) {
  const renderItem = ({ item }: { item: T }) => {
    return (
      <TouchableOpacity style={FormInputStyle.listItem} onPress={() => setValue(item)}>
        <Text>{renderValue(item)}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <FlashList
      renderItem={renderItem}
      data={data}
      estimatedListSize={{ height: data.length * 50, width: width }}
      estimatedItemSize={50}
    />
  );
}
