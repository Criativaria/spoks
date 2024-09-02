import { useEffect, useState } from "react";
import { Channel } from "../../api/channels/types";
import { getChannels } from "../../api/channels";
import { addFavoriteChannel, getFavoritesChannels, removeFavoriteChannel } from "../../utils/storage/channels";

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
        if (showFavorites) {
            const channelFavoritesFilter = channels.filter((channel) =>
                isFavoriteChannel(channel.code)
            )
            return channelFavoritesFilter.filter((channel) => {
                return channel.name.toLowerCase().includes(searchFilter.toLowerCase());
            });
        }

        return channels.filter((channel) => {
            return channel.name.toLowerCase().includes(searchFilter.toLowerCase());
        });
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

    return {
        channels,
        searchFilter,
        setSearchFilter,
        filterChannels,
        saveFavoriteChannel,
        isFavoriteChannel,
        toggleFavorites,
        showFavorites
    }

}

