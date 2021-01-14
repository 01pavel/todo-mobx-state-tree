import { useContext, createContext } from "react";
import { RootStoreType } from "../stores/RootStore";

export const StoreContext = createContext<RootStoreType>({} as RootStoreType);

export const useStore = () => useContext(StoreContext);
