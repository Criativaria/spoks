import { StyleSheet } from "react-native"
import { useThemeContext } from "../context/theme/hooks/use-theme-context";
import { ThemeContext } from "../context/theme/theme.contex";

type CreateStyleSheet = ReturnType<typeof StyleSheet["create"]>;

export type CreateStyleCallBack<T> = (theme: ThemeContext["theme"]) => T

export function CreateStyle<T extends CreateStyleSheet>(createStyleSheet: CreateStyleCallBack<T>) {
    return function () {
        const { theme } = useThemeContext();
        const styleSheet = createStyleSheet(theme);

        return StyleSheet.create(styleSheet)
    };
}