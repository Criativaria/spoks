import { Heart } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";
import { makeStyle } from "./styles";
import { useThemeContext } from "../../context/theme/hooks/use-theme-context";

type ItemListType = {
  onFavorite: () => void;
  isFavorite: boolean;
  title: string;
  desc: string;
};

export function ItemList({
  title,
  desc,
  onFavorite,
  isFavorite,
}: ItemListType) {
  const style = makeStyle();
  const { theme } = useThemeContext();

  return (
    <View style={style.wrapper}>
      <View>
        <Text style={style.tittle}>{title}</Text>
        <Text style={style.desc}>{desc}</Text>
      </View>
      <Pressable onPress={() => onFavorite()}>
        <Heart
          color={isFavorite ? theme.primary : theme.black}
          strokeWidth={2}
          size={21}
          fill={isFavorite ? theme.primary : theme.ligth_grey}
        />
      </Pressable>
    </View>
  );
}
