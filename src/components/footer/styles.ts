import { CreateStyle } from "../../utils/create-style";
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const makeStyle = CreateStyle((theme) => ({
  container: {
    width: '100%',
    backgroundColor: theme.backgroundColor,
    paddingBottom: 80,
  },
  footerContainer: {
    backgroundColor: theme.black,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    left: 0,
    right: 0,
    marginBottom: -100,
    borderTopColor: theme.ligth_grey,
    height: 65,
    width: width * 0.9999,
  },
  footerText: {
    color: theme.white,
    fontSize: 16,
    textAlign: "center",
    fontFamily: theme.font_bold,
  },
  footerLink: {
    color: theme.light_primary,
    fontWeight: "bold",
    textDecorationLine: "underline",
    fontSize: 17,
    fontFamily: theme.font_bold,
  },
}));
