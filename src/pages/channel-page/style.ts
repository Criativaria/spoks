import { CreateStyle } from "../../utils/create-style";

export const makeStyle = CreateStyle((theme) => ({

    list: {
        overflow: "hidden",
        height: 600,
        marginVertical: 10
    },
    searchBarWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: theme.ligth_grey,
        justifyContent: "space-between"
    },
    searchBarInfos: {

    },
    searchBar: {
        width: 250,
        fontSize: 12,
        fontFamily: theme.font_regular,
        backgroundColor: theme.light_primary
    }

}))