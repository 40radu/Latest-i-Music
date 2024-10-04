import { create } from "zustand";

interface IStateNavMobil {
    search: boolean
    menuBar : boolean
    seeSearch : ()=> void
    seeMenuBar : ()=> void
    hide : () => void
}

export const useStoreStateNavMobil = create<IStateNavMobil>()(
    (set, get) => ({
        search: false,
        menuBar : false,

        seeSearch : ()=>{
            set ({ search : true})
            set ({menuBar : false})
        },

        seeMenuBar : ()=>{
            set ({ search : false})
            set ({menuBar : true})
        },

        hide : ()=>{
            set ({ search : false})
            set ({menuBar : false})
        }
    })
)


