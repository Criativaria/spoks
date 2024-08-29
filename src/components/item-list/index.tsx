import { Heart } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";
import { makeStyle } from "./styles";
import { useThemeContext } from "../../context/theme/hooks/use-theme-context";
import { useState } from "react";

type ItemListType = {
  title: string;
  desc: string;
  favorite: boolean;
};

export function ItemList({ title: title, desc, favorite }: ItemListType) {
  const style = makeStyle();
  const { theme } = useThemeContext();

  const setFavorite = () => {
    favorite = true;
  };

  return (
    <View style={style.wrapper}>
      <View>
        <Text style={style.tittle}>{title}</Text>
        <Text style={style.desc}>{desc}</Text>
      </View>
      <Pressable onPress={() => setFavorite()}>
        <Heart
          color={favorite ? theme.primary : theme.black}
          strokeWidth={2}
          size={21}
          fill={favorite ? theme.primary : theme.ligth_grey}
        />
      </Pressable>
    </View>
  );
}
