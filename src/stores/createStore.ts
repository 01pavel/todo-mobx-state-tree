import RootStore, { RootStoreType, RootStoreEnv } from "./RootStore";
import { TodoStore } from "./Todos";

export const createStore = (): RootStoreType => {
  const todos = TodoStore.create({
    // todos: [{ id: 123, title: "dfs" }],
    todos: [],
  });

  const env: RootStoreEnv = { todos };

  const rootStore = RootStore.create(
    {
      todos,
    },
    env
  );

  return rootStore;
};
