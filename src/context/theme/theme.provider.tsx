import { ReactNode } from "react";
import { ThemeContext } from "./theme.contex";
import { ThemeNames, themes } from "../../styles/theme";
import { useSettingsContext } from "../settings/settings-contex";

export type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider(props: ThemeProviderProps) {
  const { getConfig } = useSettingsContext()
  const currentTheme = getConfig<ThemeNames>("theme", "light")
  const fontSize = getConfig("fontSize", 1)

  return (
    <ThemeContext.Provider value={{ theme: { ...themes[currentTheme], fontSize } }}>
      {props.children}
    </ThemeContext.Provider>
  );
}