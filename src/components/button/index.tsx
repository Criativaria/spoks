import { Pressable, StyleProp, Text, TextStyle, ViewStyle } from "react-native";
import { useThemeContext } from "../../context/theme/hooks/use-theme-context";
import { makeStyle } from "./style";

export type ButtonType = {
    text: string
    onPress?: () => void
    wraperStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
}


export default function Button({ onPress, text, wraperStyle, textStyle }: ButtonType) {
    const defaultStyle = makeStyle();

    return (
        <Pressable style={[defaultStyle.wrapper, wraperStyle]} onPress={onPress}>
            <Text style={[defaultStyle.text, textStyle]}>{text}</Text>
        </Pressable>
    )

}