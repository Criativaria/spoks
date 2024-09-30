
import { Program } from "../../api/programs/types";
import { useStorageContext } from '../../context/storage/storage-context';

const FAVORITE_PROGRAMS_KEY = "FAVORITE_PROGRAMS";

export function useProgramStorage() {

    const storage = useStorageContext()

    async function getFavoritesPrograms(): Promise<Program[]> {
        try {
            const favoritesPrograms = await storage.getItem(FAVORITE_PROGRAMS_KEY);
            return JSON.parse(favoritesPrograms!) || []
        } catch (error) {
            console.error("deu erro no getFavoritesPrograms", error);
            return [];
        }
    }

    async function addFavoriteProgram(props: Program) {
        try {
            const favoritesPrograms: Program[] = await getFavoritesPrograms();

            const findDuplicate = favoritesPrograms.find((item) => item.id == props.id)
            if (!findDuplicate) {
                favoritesPrograms.push(props)
                await storage.setItem(FAVORITE_PROGRAMS_KEY, JSON.stringify(favoritesPrograms));
            }
        } catch (error) {
            console.error("deu erro no addFavoriteProgram", error);
        }
    }
    async function removeFavoriteProgram(props: Program) {
        try {
            const favoritePrograms: Program[] = await getFavoritesPrograms();
            const newFavorites: Program[] = favoritePrograms.filter((item) => item.id !== props.id)
            await storage.setItem(FAVORITE_PROGRAMS_KEY, JSON.stringify(newFavorites))
        } catch (error) {
            console.error("deu erro no removeFavoriteProgram", error)
        }
    }

    return { getFavoritesPrograms, addFavoriteProgram, removeFavoriteProgram };
}