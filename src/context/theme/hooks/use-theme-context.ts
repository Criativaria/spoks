import { useContext } from "react";
import { ThemeContext } from "../theme.contex";

export function useThemeContext() {

    const context = useContext(ThemeContext)

    if (context == undefined) {
        throw new Error("Missing ThemeContext");
    }
    return context;
}