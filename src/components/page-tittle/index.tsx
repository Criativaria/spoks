import { ArrowLeft, Heart } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";
import { makeStyle } from "./style";
import { useThemeContext } from "../../context/theme/hooks/use-theme-context";

type PageTittleType = {
  title: string;
  heart: boolean;
  arrow: boolean;
  onFavoritesClick: () => void;
  isFavorites: boolean;
};

export function PageTitle({
  title,
  arrow,
  onFavoritesClick,
  isFavorites,
}: PageTittleType) {
  const style = makeStyle();
  const { theme } = useThemeContext();
  return (
    <View style={style.wrapper}>
      <ArrowLeft
        style={arrow ? style.iconShowUp : style.iconHide}
        color={theme.black}
        strokeWidth={2}
        size={28}
      />
      <View style={style.titleView}>
        <Text style={style.title}>{title}</Text>
      </View>
      <Pressable onPress={() => onFavoritesClick()}>
        <Heart
          fill={isFavorites ? theme.primary : theme.white}
          color={isFavorites ? theme.primary : theme.black}
          strokeWidth={2}
          size={28}
        />
      </Pressable>
    </View>
  );
}
