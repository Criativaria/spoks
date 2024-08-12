import { ReactNode, useState } from "react";
import { ThemeContext } from "./theme.contex";
import { ThemeNames, themes } from "../../styles/theme";

export type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider(props: ThemeProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<ThemeNames>("light");

  const setTheme = (theme: ThemeNames) => {
    setCurrentTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ setTheme, theme: themes[currentTheme] }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
