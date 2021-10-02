import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ordersApi } from '../api';


export const getOrders = createAsyncThunk(
    'cart/getOrders',
    async () => {
        const response = ordersApi.getOrders();
        return response;
    }
);

export const postOrder = createAsyncThunk(
    'cart/postOrder',
    async (body) => {
        const response = ordersApi.makeOrder(body);
        return response;
    }
);

export const removeOrder = createAsyncThunk(
    'cart/removeOrder',
    async (id) => {
        const response = ordersApi.deleteOrder(id);
        return response;
    }
);

export const removeAllOrders = createAsyncThunk(
    'cart/removeAllOrders',
    async () => {
        const response = ordersApi.deleteAllOrders();
        return response;
    }
);


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        orders: [], // prodInfo = {orderId,productId,name,price,image,quantity}
        count: 0,
        total: 0.00,
        loading: false,
        cartChanged: true
    },
    reducers: {},
    extraReducers: {
        [getOrders.pending]: (state) => {
            state.loading = true
        },

        [getOrders.fulfilled]: (state, action) => {
            const {data, quantity, total} = action.payload;
            state.orders = data;
            state.count = quantity;
            state.total = total;
            state.loading = false;
            
        },

        [postOrder.fulfilled]: (state) => {
            state.cartChanged = !state.cartChanged;
        },

        [removeOrder.fulfilled]: (state) => {
            state.cartChanged = !state.cartChanged;
        },

        [removeAllOrders.fulfilled]: (state) => {
            state.cartChanged = !state.cartChanged;
        }
    }
});


export default cartSlice.reducer;