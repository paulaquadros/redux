import { createSlice } from "@reduxjs/toolkit";

interface Produto {
  id: number;
  nome: string;
  preco: number;
  estoque: number;
  createdAt: string;
  updatedAt: string;
}

interface ProdutosState {
  produtos: Produto[];
}

const initialState: ProdutosState = {
  produtos: [
    {
      id: 1,
      nome: "Produto 1",
      preco: 10,
      estoque: 10,
      createdAt: "2021-08-01T00:00:00.000Z",
      updatedAt: "2021-08-01T00:00:00.000Z",
    },
  ],
};

const produtosSlice = createSlice({
  name: "produtosSlice",
  initialState: initialState,
  reducers: {
    addProduto(state, action) {
      state.produtos.push(action.payload);
    },
  },
});

export const { addProduto } = produtosSlice.actions;
export default produtosSlice.reducer;
