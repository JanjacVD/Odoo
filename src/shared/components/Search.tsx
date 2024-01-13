import { TextInput, View } from "react-native";
type SearchProps = {
  searchValue: string;
  setSearchValue(text: string): void;
};

const Search = ({ searchValue, setSearchValue }: SearchProps) => {
  return (
    <View>
      <TextInput
        placeholder="Search"
        value={searchValue}
        onChangeText={setSearchValue}
      />
    </View>
  );
};

export default Search;
