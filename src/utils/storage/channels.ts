import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITE_CHANNELS_KEY = "FAVORITE_CHANNELS";

export async function addFavoriteChannel(channelId: string) {
    try {
        const favoritesChannels: string[] = await getFavoritesChannels();

        if (!favoritesChannels.includes(channelId)) {
            favoritesChannels.push(channelId)
            await AsyncStorage.setItem(FAVORITE_CHANNELS_KEY, JSON.stringify(favoritesChannels))
        }
    } catch (error) {
        console.error("deu erro no addFavoritesChannels: " + error)
    }

}
export async function getFavoritesChannels(): Promise<string[]> {
    try {
        const favoritesChannels = await AsyncStorage.getItem(FAVORITE_CHANNELS_KEY)
        return JSON.parse(favoritesChannels!) || []
    } catch (error) {
        console.error("deu erro no getFavoritesChannels: " + error)
        return [];
    }

}
export async function removeFavoriteChannel(channelId: string) {
    try {
        const favoritesChannels: string[] = await getFavoritesChannels();
        const newFavorites: string[] = favoritesChannels.filter((item) => item !== channelId);
        await AsyncStorage.setItem(FAVORITE_CHANNELS_KEY, JSON.stringify(newFavorites));
    } catch (error) {
        console.error("deu erro no removeFavoriteChannel: " + error);
    }

}

