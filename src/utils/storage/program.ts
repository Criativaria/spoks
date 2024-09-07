import AsyncStorage from '@react-native-async-storage/async-storage';
import { Program } from "../../api/programs/types";

const FAVORITE_PROGRAMS_KEY = "FAVORITE_PROGRAMS";

export async function getFavoritesPrograms(): Promise<Program[]> {
    try {
        const favoritesPrograms = await AsyncStorage.getItem(FAVORITE_PROGRAMS_KEY);
        return JSON.parse(favoritesPrograms!) || []
    } catch (error) {
        console.error("deu erro no getFavoritesPrograms", error);
        return [];
    }
}
export async function addFavoriteProgram(props: Program) {
    try {
        const favoritesPrograms: Program[] = await getFavoritesPrograms();

        const findDuplicate = favoritesPrograms.find((item) => item.id == props.id)
        if (!findDuplicate) {
            favoritesPrograms.push(props)
            await AsyncStorage.setItem(FAVORITE_PROGRAMS_KEY, JSON.stringify(favoritesPrograms));
        }
    } catch (error) {
        console.error("deu erro no addFavoriteProgram", error);
    }
}
export async function removeFavoriteProgram(props: Program) {
    try {
        const favoritePrograms: Program[] = await getFavoritesPrograms();
        const newFavorites: Program[] = favoritePrograms.filter((item) => item.id !== props.id)
        await AsyncStorage.setItem(FAVORITE_PROGRAMS_KEY, JSON.stringify(newFavorites))
    } catch (error) {
        console.error("deu erro no removeFavoriteProgram", error)
    }

}
