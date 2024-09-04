import { Search, X } from "lucide-react-native";
import { Pressable, TextInput, View } from "react-native";
import { makeStyle } from "./style";

export type SearchBarType = {
  onChangeText: (value: string) => void;
  value: string;
};

export function SearchBar({ onChangeText, value }: SearchBarType) {
  const style = makeStyle();
  return (
    <View style={style.searchBarWrapper}>
      <Search color="black" />
      <TextInput
        placeholder="procurar em canais"
        style={style.searchBar}
        onChangeText={onChangeText}
        value={value}
      />
      <Pressable onPress={() => onChangeText("")}>
        <X color="black" />
      </Pressable>
    </View>
  );
}
