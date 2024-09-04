import { CreateStyle } from "../../utils/create-style";

export const makeStyle = CreateStyle((theme) => ({

    searchBarWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: theme.ligth_grey,
        justifyContent: "space-between"
    },
    searchBar: {
        width: 250,
        fontSize: 12,
        fontFamily: theme.font_regular,
        backgroundColor: theme.light_primary
    }
}));