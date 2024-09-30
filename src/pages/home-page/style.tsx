import { CreateStyle } from "../../utils/create-style";

export const makeStyle = CreateStyle((theme) => ({
  wrapper: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
