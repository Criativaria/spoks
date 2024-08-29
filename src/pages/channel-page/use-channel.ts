import { useEffect, useState } from "react";
import { Channel } from "../../api/channels/types";
import { getChannels } from "../../api/channels";


export function useChannel() {
    const [channels, setChannels] = useState<Channel[]>([]);
    const [searchFilter, setSearchFilter] = useState("");

    useEffect(() => {
        getChannelsInfo();
    }, []);

    const getChannelsInfo = async () => {
        const channels = await getChannels();
        setChannels(channels);
    };

    const filterChannels = () => {
        return channels.filter((channel) => {
            return channel.name.toLowerCase().includes(searchFilter.toLowerCase())
        })
    }

    return {
        channels,
        searchFilter,
        setSearchFilter,
        filterChannels
    }

}

