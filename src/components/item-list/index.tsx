import { Heart } from "lucide-react-native";
import { Text, View } from "react-native";
import { makeStyle } from "./styles";
import { useThemeContext } from "../../context/theme/hooks/use-theme-context";

type ItemListType = {
  tittle: string;
  desc: string;
  favorite: boolean;
};

export function ItemList({ tittle, desc, favorite }: ItemListType) {
  const styles = makeStyle();
  const { theme } = useThemeContext();

  return (
    <View style={styles.wrapper}>
      <View>
        <Text style={styles.tittle}>{tittle}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      <Heart
        color={favorite ? theme.primary : theme.black}
        strokeWidth={2}
        size={28}
        fill={favorite ? theme.primary : theme.ligth_grey}
      />
    </View>
  );
}
