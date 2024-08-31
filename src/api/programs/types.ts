export type Program = {
    id: string;
    code: string;
    name: string;
    category: string;
    channel_id: string;
    start_at: string;
    end_at: string;
    created_at: string;
};

export type GetPrograms = (channelId: string) => Promise<Program[]>;