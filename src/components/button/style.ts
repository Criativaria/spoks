import { CreateStyle } from "../../utils/create-style";

export const makeStyle = CreateStyle((theme) => ({
    wrapper: {
        width: "100%",
        height: 50,
        backgroundColor: theme.primary
    },
    text: {
        color: theme.white,
        fontSize: theme.fontSize * 19,
    }
}));
