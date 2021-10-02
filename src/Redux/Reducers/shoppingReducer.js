import { createSlice } from '@reduxjs/toolkit';



const state = localStorage.getItem('listItems');

const shoppingSlice = createSlice({
    name: 'shopping',
    initialState: {
        itemsToBuy: state === null ? [] : JSON.parse(state)
    },
    reducers: {
        addItem: (state, action) => {
            state.itemsToBuy = [...state.itemsToBuy, action.payload];
            localStorage.setItem('listItems', JSON.stringify(state.itemsToBuy));
        },

        removeItem: (state, action) => {
            const filtered = state.itemsToBuy.filter(each => each.id !== action.payload);
            state.itemsToBuy = filtered;
            localStorage.setItem('listItems', JSON.stringify(state.itemsToBuy));
        }
    }
})


export const { addItem, removeItem } = shoppingSlice.actions;
export default shoppingSlice.reducer;