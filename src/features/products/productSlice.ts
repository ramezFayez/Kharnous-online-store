import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import axios from "axios";
import { Product } from "../../types";

export const getProducts = createAsyncThunk("products/fetching", async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  return res.data;
});

const list: Product[] = [];
const search: String = "";
const showSearchResult: Boolean = false;
const cart: Product[] = [];
const showCart: Boolean = false;

export const productSlice = createSlice({
  name: "products",
  initialState: {
    list,
    search,
    showSearchResult,
    cart,
    showCart,
  },

  reducers: {
    searchForProduct: (state, action) => {
      state.showSearchResult = true;
      state.search = action.payload.target.value;
    },
    addToCart: (state, action) => {
      const myProduct = state.list.find((item) => item.id === action.payload);
      if (myProduct) {
        state.cart.push(myProduct);
      }
    },
    showMyCart: (state) => {
      state.showCart = true;
    },
    hideMyCart: (state) => {
      state.showCart = false;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      return { ...state, list: action.payload };
    });
  },
});

export const { searchForProduct, addToCart, showMyCart, hideMyCart } =
  productSlice.actions;

export const selectProducts = (state: RootState) => state.products;
//export const selectSearchInput = (state: RootState) => state.products.search;

export default productSlice.reducer;
