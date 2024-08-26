import { useEffect, useState } from "react";
import { Channel } from "../../api/channels/types";
import { getChannels } from "../../api/channels";


export function useChannel() {
    const [channelInfo, setChanelInfo] = useState<Channel[]>([]);

    useEffect(() => {
        getChannelsInfo();
    }, []);

    const getChannelsInfo = async () => {
        const info = await getChannels();
        setChanelInfo(info);
    };

    return {
        channelInfo
    }

}

