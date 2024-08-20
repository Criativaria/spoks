import AsyncStorage from '@react-native-async-storage/async-storage';

export type FavoriteProgramsType = {
    id: string,
    name: string,
    channel: string,
    category: string
}

const FAVORITE_PROGRAMS_KEY = "FAVORITE_PROGRAMS";

export async function getFavoritesPrograms(): Promise<FavoriteProgramsType[]> {
    try {
        const favoritesPrograms = await AsyncStorage.getItem(FAVORITE_PROGRAMS_KEY);
        return JSON.parse(favoritesPrograms!) || []
    } catch (error) {
        console.error("deu erro no getFavoritesPrograms", error);
        return [];
    }
}
export async function addFavoriteProgram(props: FavoriteProgramsType) {
    try {
        const favoritesPrograms: FavoriteProgramsType[] = await getFavoritesPrograms();

        const findDuplicate = favoritesPrograms.find((item) => item.id == props.id)
        if (!findDuplicate) {
            favoritesPrograms.push(props)
            await AsyncStorage.setItem(FAVORITE_PROGRAMS_KEY, JSON.stringify(favoritesPrograms));
        }
    } catch (error) {
        console.error("deu erro no addFavoriteProgram", error);
    }
}
export async function removeFavoriteProgram(props: FavoriteProgramsType) {
    try {
        const favoritePrograms: FavoriteProgramsType[] = await getFavoritesPrograms();
        const newFavorites: FavoriteProgramsType[] = favoritePrograms.filter((item) => item.id !== props.id)
        await AsyncStorage.setItem(FAVORITE_PROGRAMS_KEY, JSON.stringify(newFavorites))
    } catch (error) {
        console.error("deu erro no removeFavoriteProgram", error)
    }

}
