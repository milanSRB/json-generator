import React, {createContext, useContext} from 'react';
import { useLocalStore } from "mobx-react";

export function createStore() {
    return {
        data: [],
        uploaded: false,
        get getData() {
            return this.data;
        },
        updateData(newData) {
            this.data = JSON.parse(newData);
            this.uploaded = true;
        }
    }
}

export type IStore = ReturnType<typeof createStore>;

const storeContext = createContext<IStore | null>(null)

export const StoreProvider = ({ children }: any) => {
    const store = useLocalStore(createStore);
    return <storeContext.Provider value={store}>{children}</storeContext.Provider>
}

export const useStore = () => {
    const store = useContext(storeContext);

    if (!store) throw new Error('useStore must be used withing a StoreProvider.');

    return store;
}