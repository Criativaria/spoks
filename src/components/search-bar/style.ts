import { CreateStyle } from "../../utils/create-style";

export const makeStyle = CreateStyle((theme) => ({

    searchBarWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: theme.ligth_grey,
        justifyContent: "space-between",
        padding: 5,
        borderRadius: 8,
    },
    searchBar: {
        padding: 5,
        height: 30,
        width: 250,
        fontSize: theme.fontSize * 12,
        fontFamily: theme.font_regular,
        backgroundColor: theme.ligth_grey,
    }
}));