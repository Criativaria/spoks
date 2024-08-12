import { CreateStyle } from "../../utils/create-style";


export const makeStyle = CreateStyle((theme) => ({
    wrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: 360,
        height: 95,
    },
    titleView: {
        width: 180,
        height: 95,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontFamily: theme.font_bold,
        fontSize: 30,
        textAlign: "center",
        letterSpacing: 1.2
    },
    iconShowUp: {
        display: "flex"
    },
    iconHide: {
        display: "none"
    }

}))