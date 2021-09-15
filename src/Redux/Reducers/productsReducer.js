import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { productsApi } from '../api';



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
        changed: true,
        isValid: false,
        isFormOpen: false,
        isButtonVisible: true,

        isNew: true,
        idToUpdate: 0,
        name: '',
        price: 0,
        image: '',

        confirmDialog: false,
        isOrder: true,
        productInfo: {}, // productInfo = { productId ,name ,price ,quantity, user}


    },
    reducers: {
        setFormVisibility: (state) => {
            state.isFormOpen = !state.isFormOpen;
        },

        setIsNewToFalse: (state) => {
            state.isNew = false;
        },

        setIsNewToTrue: (state) => {
            state.isNew = true;
        },

        setProductInfo: (state, action) => {
            state.idToUpdate = action.payload.id
            state.name = action.payload.name
            state.price = action.payload.price
            state.image = action.payload.image
        },

        setButtonVisibility: (state) => {
            state.isButtonVisible = !state.isButtonVisible;
        },

        confirmDialogVisibility: (state, action) => {
            state.confirmDialog = !state.confirmDialog;
            state.productInfo = action.payload; // payload = { productId ,name ,price ,quantity, user}
        },

        setIsOrderToFalse: (state) => {
            state.isOrder = false;
        },

        setIsOrderToTrue: (state) => {
            state.isOrder = true;
        },

    },
    extraReducers: {

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

    setFormVisibility, 
    setProductInfo, 
    setButtonVisibility, 
    confirmDialogVisibility,
    setIsNewToFalse,
    setIsNewToTrue,
    setIsOrderToFalse,
    setIsOrderToTrue

} = productsSlice.actions;

export default productsSlice.reducer;