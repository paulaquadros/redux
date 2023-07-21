import { combineReducers, configureStore } from "@reduxjs/toolkit";
import countReducer from "./features/count.slice";
import ProdutoReducer from "./features/produto.slice";

export const store = configureStore({
  reducer: {
    count: countReducer,
    produto: ProdutoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
