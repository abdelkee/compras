import { createSlice } from '@reduxjs/toolkit';



const shoppingSlice = createSlice({
    name: 'shopping',
    initialState: {
        itemsCount: localStorage.getItem('itemsCount')
    },
    reducers: {
        incrementList: (state, action) => {
            state.itemsCount = action.payload;
        },

        decrementList: (state, action) => {
            state.itemsCount = action.payload;
        }
    }
})


export const { incrementList, decrementList } = shoppingSlice.actions;
export default shoppingSlice.reducer;