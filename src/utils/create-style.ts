import { StyleSheet } from "react-native"
import { ThemeData } from "../styles/theme";
import { useThemeContext } from "../context/theme/hooks/use-theme-context";

type CreateStyleSheet = ReturnType<typeof StyleSheet["create"]>;

export type CreateStyleCallBack<T> = (theme: ThemeData) => T

export function CreateStyle<T extends CreateStyleSheet>(createStyleSheet: CreateStyleCallBack<T>) {
    return function () {
        const { theme } = useThemeContext();
        const styleSheet = createStyleSheet(theme);

        return StyleSheet.create(styleSheet)
    };
}