import { Text, View } from "react-native";
import { FontSizeSlider } from "../../components/font-size-slider";
import { PageTitle } from "../../components/page-tittle";
import Button from "../../components/button";
import { useThemeContext } from "../../context/theme/hooks/use-theme-context";

export default function ConfigPage() {
    const { theme } = useThemeContext();
    return (
        <View>
            <Text>Configurações</Text>

            <FontSizeSlider />

            <Text>Modo</Text>

            <Button text="ativar modo escuro"
                textStyle={{ color: theme.white }} />

            <Button text="ativar modo de alto contraste"
                textStyle={{ color: theme.white }}
            />

            <Button text="configurar depois" />

            <Button text="deslogar" />

            <Text>clique para usar o aplicativo</Text>

            <Button text="proximo" />
        </View>

    )

}