import { types, Instance } from "mobx-state-tree";
import { TodoStore, TodoStoreType } from "./Todos";

export type RootStoreType = Instance<typeof RootStore>;
export type RootStoreEnv = {
  todos: TodoStoreType;
};

const RootStore = types.model("RootStore", {
  todos: TodoStore,
});

export default RootStore;
