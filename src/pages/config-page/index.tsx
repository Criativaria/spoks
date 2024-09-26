import { Text, View } from "react-native";
import Slider from '@react-native-community/slider';
import { useThemeContext } from "../../context/theme/hooks/use-theme-context";
import { useContext, useState } from "react";
import { FontSizeContext } from "../../context/font-size/font-size.context";

export function ConfigPage() {
    const fontSizeContext = useContext(FontSizeContext);
    const { theme } = useThemeContext();

    if (!fontSizeContext) {
        throw new Error("deu tudo errado aqui")
    }

    const { fontSize, setFontSize } = fontSizeContext;

    return (
        <View style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Slider
                style={{ width: 300, height: 40 }}
                minimumValue={16}
                maximumValue={40}
                minimumTrackTintColor={theme.primary}
                maximumTrackTintColor={theme.black}
                value={fontSize}
                thumbTintColor={theme.primary}
                step={1}
                onValueChange={setFontSize}
            />
        </View >

    )

}