import axios, { AxiosError } from "axios";
import { Channel, GetChannels } from "./types";

export const getChannels: GetChannels = async () => {
    const API_URL: string = process.env.EXPO_PUBLIC_API_URL!;

    try {
        const axiosResult = await axios.get(`${API_URL}/channel`);
        const channelsResult: Channel[] = axiosResult.data || [];

        return channelsResult;
    } catch (error) {
        if (error instanceof AxiosError) console.error({ code: error.code, erro: error.message });
        else console.error(error);

        return [];
    }
}