import { createSlice } from '@reduxjs/toolkit';


const generalSlice = createSlice({
    name: 'general',
    initialState: {
        isBlur: false,
        isToastVisible: false,
        changePosition: true,
        isValid: false,
        signedUser: ''
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

        setIsValidToTrue: (state) => {
            state.isValid = true;
        },

        setIsValidToFalse: (state) => {
            state.isValid = false;
        },

        setSignedUser: (state, action) => {
            state.signedUser = action.payload;
        }

    }
});


export const { 
    makeBgBlur, 
    removeBgBlur, 
    setToastVisibility, 
    setChangePosition,
    setIsValidToTrue,
    setIsValidToFalse,
    setSignedUser

} = generalSlice.actions;
export default generalSlice.reducer;