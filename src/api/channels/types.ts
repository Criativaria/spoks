export type Channel = {
    id: string;
    code: string;
    name: string;
}

export type GetChannels = () => Promise<Channel[]>;