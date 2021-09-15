import { createSlice } from '@reduxjs/toolkit';




const generalSlice = createSlice({
    name: 'general',
    initialState: {
        isBlur: false,
        isToastVisible: false,
        changePosition: true,
        loading: false,
        isValid: false
    },
    reducers: {
        makeBgBlur: (state) => {
            state.isBlur = true;
        },

        removeBgBlur: (state) => {
            state.isBlur = false;
        },

        setToastVisibility: (state) => {
            state.isToastVisible = !state.isToastVisible;
        },

        setChangePosition: (state) => {
            state.changePosition = !state.changePosition;
        },

        setIsValid: (state) => {
            state.isValid = true;
        }

    },
    extraReducers: {
    }
});


export const { 
    makeBgBlur, 
    removeBgBlur, 
    setToastVisibility, 
    setChangePosition,
    setIsValid

} = generalSlice.actions;
export default generalSlice.reducer;