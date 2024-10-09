import { create } from "zustand";

interface IStateNavMobil {
    search: boolean;
    menuBar : boolean;
    basket : boolean;
    seeSearch : ()=> void;
    seeMenuBar : ()=> void;
    seeBasket : ()=> void;
    hide : () => void;
}

export const useStoreStateNav = create<IStateNavMobil>()(
    (set, get) => ({
        search: false,
        menuBar : false,
        basket : false,

        seeSearch : ()=>{
            set ({ search : true})
            set ({menuBar : false})
            set ({basket : false})
        },

        seeMenuBar : ()=>{
            set ({menuBar : true})
            set ({ search : false})
            set ({ basket : false})
        },

        seeBasket : ()=>{
            set ({ basket : true})
            set ({menuBar : false})
            set ({ search : false})
        },

        hide : ()=>{
            set ({ search : false})
            set ({menuBar : false})
            set ({basket : false})
        },

    })
)


