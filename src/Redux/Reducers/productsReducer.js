import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { productsApi } from '../api';


export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = productsApi.getProducts();
        return response;
    }
)

export const postProduct = createAsyncThunk(
    'products/postProduct',
    async (body) => {
        const response = productsApi.createProduct(body);
        return response;
    }
)

export const editProduct = createAsyncThunk(
    'products/editProduct',
    async ({id, name, price, image}) => {
        const response = productsApi.updateProduct(id, {name, price, image});
        return response;
    }
)

export const deleteProduct = createAsyncThunk(
    'products/deleteProduct',
    async (id) => {
        const response = productsApi.deleteProduct(id);
        return response;
    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        changed: true,
        loading: false,
        user: '',
        isForm: false,

        isNew: true,
        idToUpdate: 0,
        name: '',
        price: 0,
        image: '',

        confirmDialog: false,
        isOrder: true,
        productInfo: {}, // productInfo = { productId ,name ,price ,quantity}


    },
    reducers: {
        setForm: (state, action) => {
            state.isForm = action.payload;
        },

        setIsNew: (state, action) => {
            state.isNew = action.payload;
        },

        setProductInfo: (state, action) => {
            state.idToUpdate = action.payload.id
            state.name = action.payload.name
            state.price = action.payload.price
            state.image = action.payload.image
        },

        confirmDialogVisibility: (state, action) => {
            state.confirmDialog = action.payload.true;
            state.productInfo = action.payload.productInfo; // payload = { productId ,name ,price ,quantity}
        },

        setIsOrder: (state, action) => {
            state.isOrder = action.payload;
        },

    },
    extraReducers: {

        [fetchProducts.pending]: (state) => {
            state.loading = true;
        },

        [fetchProducts.fulfilled]: (state, action) => {
            state.products = action.payload.products;
            state.user = action.payload.user;
            state.loading = false;
        },

        [postProduct.fulfilled]: (state) => {
            state.changed = !state.changed;
        },

        [editProduct.fulfilled]: (state) => {
            state.changed = !state.changed;
        },

        [deleteProduct.fulfilled]: (state) => {
            state.changed = !state.changed;
        },
    }
})


export const { 

    setForm, 
    setProductInfo, 
    confirmDialogVisibility,
    setIsNew,
    setIsOrder

} = productsSlice.actions;

export default productsSlice.reducer;