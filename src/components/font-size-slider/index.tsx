import { Text, View } from "react-native";
import Slider from '@react-native-community/slider';
import { useThemeContext } from "../../context/theme/hooks/use-theme-context";
import { useSettingsContext } from "../../context/settings/settings-contex";
import { makeStyle } from "./style";

export function FontSizeSlider() {
    const { theme } = useThemeContext();
    const configs = useSettingsContext();
    const fontSize = configs.getConfig("fontSize", 1);
    const style = makeStyle();

    return (
        <View>
            <Text style={style.tittle} >Definir tamanho da fonte</Text>
            <Text style={style.subTittle} >Arraste para ajustar o tamanho</Text>
            <Slider
                style={{ width: 225, height: 40 }}
                minimumValue={0.75}
                maximumValue={1.25}
                minimumTrackTintColor={theme.primary}
                maximumTrackTintColor={theme.black}
                value={fontSize}
                thumbTintColor={theme.primary}
                onValueChange={(value) => configs.setConfig("fontSize", value)}
            />
        </View >

    )

}