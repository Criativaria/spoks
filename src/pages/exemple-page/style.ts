import { CreateStyle } from "../../utils/create-style";

export const makeStyle = CreateStyle((theme) => ({

    text: {
        fontSize: theme.fontSize * 16
    },
    textDois: {
        fontSize: theme.fontSize * 24
    }

}))