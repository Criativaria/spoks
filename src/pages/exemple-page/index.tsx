import { Text, View } from "react-native";
import Slider from '@react-native-community/slider';
import { useThemeContext } from "../../context/theme/hooks/use-theme-context";
import { useSettingsContext } from "../../context/settings/settings-contex";
import { makeStyle } from "./style";

export function ExemplePage() {
    const { theme } = useThemeContext();
    const configs = useSettingsContext();
    const fontSize = configs.getConfig("fontSize", 1);
    const style = makeStyle();
    return (
        <View style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Text style={style.text} >the quick fox jumps over the lazy dog</Text>
            <Text style={style.textDois} >the quick dog jumps over the lazy fox</Text>
            <Slider
                style={{ width: 300, height: 40 }}
                minimumValue={0.5}
                maximumValue={2}
                minimumTrackTintColor={theme.primary}
                maximumTrackTintColor={theme.black}
                value={fontSize}
                thumbTintColor={theme.primary}
                onValueChange={(value) => configs.setConfig("fontSize", value)}
            />
        </View >

    )

}