import { useEffect, useState } from "react";
import { Program } from "../../api/programs/types";
import { getPrograms } from "../../api/programs";
import { ProgramsType } from ".";
import { addFavoriteProgram, getFavoritesPrograms, removeFavoriteProgram } from "../../utils/storage/program";

export function useProgram({ channelCode }: ProgramsType) {

    const [programs, setPrograms] = useState<Program[]>([]);
    const [searchFilter, setSearchFilter] = useState("");
    const [showFavorites, setShowFavorites] = useState(false);
    const [favoritePrograms, setFavoritePrograms] = useState<Program[]>([]);

    useEffect(() => {
        getProgramsInfo();
        getFavoriteProgramsInfo();
    }, []);

    const getProgramsInfo = async () => {
        const program = await getPrograms(channelCode);
        setPrograms(program);
    };
    const getFavoriteProgramsInfo = async () => {
        const favoritePrograms = await getFavoritesPrograms();
        setFavoritePrograms(favoritePrograms);
    }

    const filterPrograms = () => {
        let filterPrograms = programs;

        if (showFavorites) {
            filterPrograms = filterPrograms.filter((program) =>
                isFavoriteProgram(program)
            )
        }
        if (searchFilter) {
            filterPrograms = filterPrograms.filter(({ name }) =>
                name.toLowerCase().includes(searchFilter.toLowerCase())
            );
        }
        return filterPrograms;
    }

    const toggleFavorites = () => {
        setShowFavorites(!showFavorites);
    }

    const saveFavoriteProgram = async (program: Program) => {
        const favoriteProgramVerification = isFavoriteProgram(program);

        if (favoriteProgramVerification === false) {
            await addFavoriteProgram(program);
        } else {
            await removeFavoriteProgram(program);
        }
        await getFavoriteProgramsInfo();

    }
    const isFavoriteProgram = (program: Program) => {
        const favoriteChannelVerification = favoritePrograms.some((favoriteProgram) => favoriteProgram.code === program.code);
        return favoriteChannelVerification;
    }
    //comparar essa verificação usando o CODE do programa.

    const formatProgram = (program?: Program) => {
        if (!program) {
            return "Nenhum programa em exibição.";
        }
        const programDate = new Date(program.start_at);
        const programHour = programDate.getHours().toString().padStart(2, "0");
        const programMin = programDate.getMinutes().toString().padStart(2, "0");
        const programTime = programHour + ":" + programMin;

        return programTime + " - " + program.name;
    }

    return {
        programs,
        searchFilter,
        setSearchFilter,
        filterPrograms,
        saveFavoriteProgram,
        isFavoriteProgram,
        toggleFavorites,
        showFavorites,
        formatProgram
    };

}

