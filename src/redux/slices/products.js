import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const data = await axios.get('/products');
    return data;
})

export const fetchMostPopularProducts = createAsyncThunk('products/fetchMostPopularProducts', async () => {
    const data = await axios.get('/products/most/popular');
    return data;
})

export const fetchNewProducts = createAsyncThunk('products/fetchNewProducts', async () => {
    const data = await axios.get('/products/most/new');
    return data;
})

export const fetchRemoveProduct = createAsyncThunk('products/fetchRemoveProduct', async (id) => {
    await axios.delete(`/products/${id}`)
})

const initialState = {
    products: {
        items: [],
        status: 'loading'
    },
    mostPopular: {
        items: [],
        status: 'loading'
    },
    newProducts: {
        items: [],
        status: 'loading'
    },
    genres: {
        items: [],
        status: 'loading'
    }
    
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: {
        //Получение товаров
        [fetchProducts.pending]: (state, action) => {
            state.products.status = 'loading'
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.products.items = action.payload
            state.products.status = 'loaded'
        },
        [fetchProducts.rejected]: (state, action) => {
            state.products.items = []
            state.products.status = 'error'
        },

        //Получение популярных товаров
        [fetchMostPopularProducts.pending]: (state, action) => {
            state.mostPopular.status = 'loading'
        },
        [fetchMostPopularProducts.fulfilled]: (state, action) => {
            state.mostPopular.items = action.payload
            state.mostPopular.status = 'loaded'
        },
        [fetchMostPopularProducts.rejected]: (state, action) => {
            state.mostPopular.items = []
            state.mostPopular.status = 'error'
        },

        //Получение новых товаров
        [fetchNewProducts.pending]: (state, action) => {
            state.newProducts.status = 'loading'
        },
        [fetchNewProducts.fulfilled]: (state, action) => {
            state.newProducts.items = action.payload
            state.newProducts.status = 'loaded'
        },
        [fetchNewProducts.rejected]: (state, action) => {
            state.newProducts.items = []
            state.newProducts.status = 'error'
        },

        //Удаление товара
        [fetchRemoveProduct.pending]: (state, action) => {
            debugger
            state.products.items.data = state.products.items.data.filter(obj => obj.id !== action.meta.arg)
        },
    }
});

export const productsReducer = productsSlice.reducer