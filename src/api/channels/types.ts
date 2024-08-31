import { Program } from "../programs/types";

export type Channel = {
    id: string;
    code: string;
    name: string;
    current_program?: Program;
}

export type GetChannels = () => Promise<Channel[]>;