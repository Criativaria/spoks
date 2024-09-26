import AsyncStorage from "@react-native-async-storage/async-storage";
import { IStorage } from "../adapter";


export function useAsyncStorageAdapter(): IStorage {

    const getItem = async (key: string): Promise<string | null> => {
        return AsyncStorage.getItem(key);
    }

    const setItem = async (key: string, value: string): Promise<void> => {
        await AsyncStorage.setItem(key, value);
    }

    return { getItem, setItem }
}