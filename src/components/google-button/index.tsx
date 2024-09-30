import { ActivityIndicator, Pressable, Text } from "react-native";
import { makeStyle } from "./style";
import * as WebBrowser from "expo-web-browser";
import { useEffect, useState } from "react";
import { useOAuth } from "@clerk/clerk-expo";

export type GoogleButtonType = {
  title: string;
  isLoading?: boolean;
  onPress: () => void;
};

export function GoogleButton({
  title,
  isLoading = false,
  onPress,
}: GoogleButtonType) {
  const style = makeStyle();

  return (
    <Pressable
      disabled={isLoading}
      style={style.buttonWrapper}
      onPress={onPress}
    >
      {isLoading ? (
        <ActivityIndicator size={"large"} color={"#E8E8E8"} />
      ) : (
        <Text style={style.text}>{title}</Text>
      )}
    </Pressable>
  );
}
