import { Heart } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";
import { makeStyle } from "./styles";
import { useThemeContext } from "../../context/theme/hooks/use-theme-context";

type ItemListType = {
  onFavorite: () => void;
  isFavorite: boolean;
  title: string;
  desc: string;
  onClick?: () => void;
};

type ResumeTextType = {
  text: string;
  limit: number;
};

export function ItemList({
  title,
  desc,
  onFavorite,
  isFavorite,
  onClick,
}: ItemListType) {
  const style = makeStyle();
  const { theme } = useThemeContext();

  const resumeText = ({ text, limit }: ResumeTextType) => {
    return text.length > 25 ? text.slice(0, limit).concat("...") : text;
  };

  return (
    <View style={style.wrapper}>
      <Pressable onPress={onClick}>
        <View>
          <Text style={style.tittle}>
            {resumeText({ text: title, limit: 25 })}
          </Text>
          <Text style={style.desc}>
            {resumeText({ text: desc, limit: 35 })}
          </Text>
        </View>
      </Pressable>
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
