import { createSlice } from '@reduxjs/toolkit';



const shoppingSlice = createSlice({
    name: 'shopping',
    initialState: {
        itemsToBuy: [] 
    },
    reducers: {
        addItem: (state, action) => {
            state.itemsToBuy = [...state.itemsToBuy, action.payload];
        },

        removeItem: (state, action) => {
            state.itemsToBuy = action.payload;
        }
    }
})


export const { addItem, removeItem } = shoppingSlice.actions;
export default shoppingSlice.reducer;