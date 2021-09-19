import { createSlice } from '@reduxjs/toolkit';




const generalSlice = createSlice({
    name: 'general',
    initialState: {
        isBlur: false,
        loading: false,
        isSearch: false
    },
    reducers: {
        setBlur: (state, action) => {
            state.isBlur = action.payload;
        },

        setSearch: (state, action) => {
            state.isSearch = action.payload;
        }

    },
});


export const { 
    setBlur, 
    setSearch

} = generalSlice.actions;
export default generalSlice.reducer;