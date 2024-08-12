import { createContext } from "react"
import { ThemeData, ThemeNames } from "../../styles/theme"

export type ThemeContext = {
    theme: ThemeData,
    setTheme: (theme: ThemeNames) => void;
}

export const ThemeContext = createContext<ThemeContext | undefined>(undefined)

