import axios, { AxiosError } from "axios";
import { Program, GetPrograms } from "./types";

export const getPrograms: GetPrograms = async (channelCode: string) => {
    const API_URL: string = process.env.EXPO_PUBLIC_API_URL!;

    try {
        const axiosResult = await axios.get(`${API_URL}/program/${channelCode}`);
        const programsResult: Program[] = axiosResult.data || [];

        return programsResult;
    } catch (error) {
        if (error instanceof AxiosError) console.error({ code: error.code, message: error.message });
        else console.error(error);

        return [];
    }

}