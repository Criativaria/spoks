import { CreateStyle } from "../../utils/create-style";

export const makeStyle = CreateStyle((theme) => ({
    tittle: {
        fontSize: theme.fontSize * 16
    },
    subTittle: {
        fontSize: theme.fontSize * 12
    }

}));
