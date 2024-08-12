import { ArrowLeft, Heart } from "lucide-react-native";
import { Text, View } from "react-native";
import { makeStyle } from "./style";
import { useState } from "react";
import { useThemeContext } from "../../context/theme/hooks/use-theme-context";

type PageTittleType = {
  title: string;
  heart: boolean;
  arrow: boolean;
};

export function PageTittle({ title, arrow, heart }: PageTittleType) {
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
      <Heart
        style={heart ? style.iconShowUp : style.iconHide}
        color={theme.black}
        strokeWidth={2}
        size={28}
      />
    </View>
  );
}
