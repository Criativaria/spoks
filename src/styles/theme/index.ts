export type ThemeData = {
    backgroundColor: string
    white: string
    black: string
    primary: string
    light_primary: string,
    ligth_grey: string
    font_bold: string
    font_regular: string
    border: string
}

const lightTheme: ThemeData = {
    backgroundColor: "#FCFFEB",
    white: "#FCFFEB",
    black: "#1B1A1A",
    light_primary: "#C382F5",
    primary: "#AA69FC",
    ligth_grey: "#E3E5D7",
    font_bold: "Inter_Extra_Bold",
    font_regular: "Inter_Regular",
    border: "5"
}

export const themes = { //onde ficam armazenados todos os temas
    light: lightTheme,
};

export type ThemeNames = keyof typeof themes;



