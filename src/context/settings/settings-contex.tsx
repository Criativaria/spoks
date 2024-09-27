import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useAsyncStorageAdapter } from "../storage/adapters/async-storage-adapter";


export type SettingsContext = {
    setConfig: <T>(key: string, value: T) => void;
    getConfig: <T>(key: string, defaultValue: T) => T;
}

export type SettingsProviderProps = {
    children: React.ReactNode;
}

const settingsContext = createContext<SettingsContext | undefined>(undefined);

export function SettingsProvider(prop: SettingsProviderProps) {
    const storage = useAsyncStorageAdapter();
    const [configs, setConfigs] = useState<Record<string, any>>({});

    useEffect(() => {
        loadConfig();
    }, [])

    const loadConfig = async () => {
        let configs = await storage.getItem("settings")
        if (configs) {
            setConfigs(JSON.parse(configs));
        }
    }
    useEffect(() => {
        storage.setItem("settings", JSON.stringify(configs));
    }, [configs])


    const setConfig = <T,>(key: string, value: T) => {
        setConfigs((config) => Object.assign({}, config, { [key]: value }));

    }
    const getConfig = <T,>(key: string, defaultValue: T) => {
        return configs[key] ?? defaultValue;
    }

    const config = { setConfig, getConfig };


    return (
        <settingsContext.Provider value={config}>
            {prop.children}
        </settingsContext.Provider>
    )

}

export function useSettingsContext() {
    const context = useContext(settingsContext);
    if (!context) {
        throw new Error("missing settings context");
    }
    return context;
}

