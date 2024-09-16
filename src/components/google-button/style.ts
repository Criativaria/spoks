import { CreateStyle } from "../../utils/create-style";

export const makeStyle = CreateStyle((theme) => ({

    buttonWrapper: {
        width: "80%",
        height: 100,
        backgroundColor: theme.primary,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontFamily: theme.font_bold,
        fontSize: 15

    }

}));