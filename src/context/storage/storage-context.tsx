import { createContext, useContext } from "react";
import { IStorage } from "./adapter";
import { useAsyncStorageAdapter } from "./adapters/async-storage-adapter";

type StorageContext = () => IStorage;

type StorageContextProp = {
    children: React.ReactNode;
};
const storageContext = createContext<StorageContext | undefined>(undefined);

export function StorageProvider(props: StorageContextProp) {
    const storageAdapter = useAsyncStorageAdapter;
    return (
        <storageContext.Provider value={storageAdapter}>
            {props.children}
        </storageContext.Provider>
    )
}

export function useStorageContext(): IStorage {
    const context = useContext(storageContext);
    if (!context) {
        throw new Error("missing storage context");
    }
    return context();
}