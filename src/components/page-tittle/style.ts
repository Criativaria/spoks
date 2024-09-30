import { CreateStyle } from "../../utils/create-style";


export const makeStyle = CreateStyle((theme) => ({
    wrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: 95,
    },
    titleView: {
        width: '100%',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: theme.primary,
        paddingBottom: 3,
        marginBottom: 0,
    },
    title: {
        fontFamily: theme.font_bold,
        fontSize: theme.fontSize * 30,
        textAlign: "center",
        letterSpacing: 1.2
    },
    iconShowUp: {
        display: "flex"
    },
    iconHide: {
        display: "flex"
    }

}))