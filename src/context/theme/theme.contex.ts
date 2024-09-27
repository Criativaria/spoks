import { createContext } from "react"
import { ThemeData, ThemeNames } from "../../styles/theme"

export type ThemeContext = {
    theme: ThemeData & { fontSize: number },
}

export const ThemeContext = createContext<ThemeContext | undefined>(undefined)

