
import { useStorageContext } from '../../context/storage/storage-context';

const FAVORITE_CHANNELS_KEY = "FAVORITE_CHANNELS";

export function useChannelStorage() {

    const storage = useStorageContext()

    async function addFavoriteChannel(channelId: string) {
        try {
            const favoritesChannels: string[] = await getFavoritesChannels();

            if (!favoritesChannels.includes(channelId)) {
                favoritesChannels.push(channelId);
                await storage.setItem(FAVORITE_CHANNELS_KEY, JSON.stringify(favoritesChannels));
            }
        } catch (error) {
            console.error("deu erro no addFavoritesChannels: " + error);
        }

    }
    async function getFavoritesChannels(): Promise<string[]> {
        try {
            const favoritesChannels = await storage.getItem(FAVORITE_CHANNELS_KEY)
            return JSON.parse(favoritesChannels!) || []
        } catch (error) {
            console.error("deu erro no getFavoritesChannels: " + error);
            return [];
        }

    }
    async function removeFavoriteChannel(channelCode: string) {
        try {
            const favoritesChannels: string[] = await getFavoritesChannels();
            const newFavorites: string[] = favoritesChannels.filter((item) => item !== channelCode);
            await storage.setItem(FAVORITE_CHANNELS_KEY, JSON.stringify(newFavorites));
        } catch (error) {
            console.error("deu erro no removeFavoriteChannel: " + error);
        }

    }

    return { addFavoriteChannel, getFavoritesChannels, removeFavoriteChannel };

}