import { PageTitle } from "../../components/page-tittle";
import { CreateStyle } from "../../utils/create-style";
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const makeStyle = CreateStyle((theme) => ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 60,
        width: '100%',
        paddingHorizontal: 20,
        marginVertical: 10,
    },

    content: {
        width: '100%',
        alignItems: 'center',
    },

    list: {
        padding: 10,
        backgroundColor: theme.backgroundColor,
        overflow: 'hidden',
        height: 600,
        width: width * 0.9,
        marginVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: theme.black,
        borderWidth: 1,
        borderColor: theme.black,
        borderwidht: 2,
        borderRadius: 8,
    },
}));