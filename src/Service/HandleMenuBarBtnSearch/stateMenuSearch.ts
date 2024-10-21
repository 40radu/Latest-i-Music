import { create } from "zustand";

interface IStateNavMobil {
    search: boolean;
    menuBar: boolean;
    basket: boolean;
    seeSearch: () => void;
    seeMenuBar: () => void;
    seeBasket: () => void;
    hide: () => void;
}

export const useStoreStateNav = create<IStateNavMobil>()(
    (set) => ({
        search: false,
        menuBar: false,
        basket: false,

        seeSearch: () => {
            set({ search: true, menuBar: false, basket: false });
        },

        seeMenuBar: () => {
            set({ search: false, menuBar: true, basket: false });
        },

        seeBasket: () => {
            set({ search: false, menuBar: false, basket: true });
        },

        hide: () => {
            set({ search: false, menuBar: false, basket: false });
        },

    })
)


