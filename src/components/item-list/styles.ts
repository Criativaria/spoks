import { CreateStyle } from "../../utils/create-style";

export const makeStyle = CreateStyle((theme) => ({
    wrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderStyle: "solid",
        borderBlockColor: theme.black,
        borderBottomWidth: 1,
        width: 300,
        height: 50,
        padding: 8,
        marginBottom: 8
    },
    tittle: {
        fontSize: 16,
        fontFamily: theme.font_bold,
        letterSpacing: 1.2
    },
    desc: {
        fontSize: 12,
        fontFamily: theme.font_regular,
        letterSpacing: 1.2
    }
}));