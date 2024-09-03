import { useEffect, useState } from "react";
import { Channel } from "../../api/channels/types";
import { getChannels } from "../../api/channels";
import { addFavoriteChannel, getFavoritesChannels, removeFavoriteChannel } from "../../utils/storage/channels";
import { filter } from "cheerio/dist/commonjs/api/traversing";
import { Program } from "../../api/programs/types";

export function useChannel() {
    const [channels, setChannels] = useState<Channel[]>([]);
    const [searchFilter, setSearchFilter] = useState("");
    const [showFavorites, setShowFavorites] = useState(false);
    const [favoriteChannels, setFavoriteChannels] = useState<string[]>([]);

    useEffect(() => {
        getChannelsInfo();
        getFavoriteChannelsInfo();
    }, []);

    const getChannelsInfo = async () => {
        const channels = await getChannels();
        setChannels(channels);
    };
    const getFavoriteChannelsInfo = async () => {
        const favoriteChannels = await getFavoritesChannels();
        setFavoriteChannels(favoriteChannels);
    }

    const filterChannels = () => {
        let filterChannels = channels;

        if (showFavorites) {
            filterChannels = filterChannels.filter((channel) =>
                isFavoriteChannel(channel.code)
            )
        }
        if (searchFilter) {
            filterChannels = filterChannels.filter(({ name }) =>
                name.toLowerCase().includes(searchFilter.toLowerCase())
            );
        }
        return filterChannels;
    }

    const toggleFavorites = () => {
        setShowFavorites(!showFavorites);
    }

    const saveFavoriteChannel = async (channelCode: string) => {
        const favoriteChannelVerification = isFavoriteChannel(channelCode);
        if (favoriteChannelVerification == false) {
            await addFavoriteChannel(channelCode);
        } else {
            await removeFavoriteChannel(channelCode);
        }
        await getFavoriteChannelsInfo();

    }
    const isFavoriteChannel = (channelCode: string) => {
        const favoriteChannelVerification = favoriteChannels.some((favoriteChannelCode) => favoriteChannelCode == channelCode);
        return favoriteChannelVerification;
    }

    const formatProgram = (program?: Program) => {
        if (!program) {
            return "Nenhum programa em exibição.";
        }
        const programDate = new Date(program.start_at);
        const programHour = programDate.getHours().toString().padStart(2, "0");
        const programMin = programDate.getMinutes().toString().padStart(2, "0");
        const completeDate = programHour + ":" + programMin;

        return completeDate + "-" + program.name;
    }

    return {
        channels,
        searchFilter,
        setSearchFilter,
        filterChannels,
        saveFavoriteChannel,
        isFavoriteChannel,
        toggleFavorites,
        showFavorites,
        formatProgram
    }

}

