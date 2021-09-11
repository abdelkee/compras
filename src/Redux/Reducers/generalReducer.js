import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { usersApi } from '../api';

export const loginUser = createAsyncThunk(
    'general/loginUser',
    async(userData) => {
        const response = usersApi.login(userData);
        return response;
    }
)




const generalSlice = createSlice({
    name: 'general',
    initialState: {
        isBlur: false,
        isToastVisible: false,
        changePosition: true,
        loading: false,
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

    },
    extraReducers: {
        [loginUser.pending]: (state) => {
            state.loading = true;
        },

        [loginUser.fulfilled]: (state, action) => {
            console.log(action.payload);
            if(action.payload) {
                state.isValid = true;
                state.signedUser = action.payload.userName;
                state.loading = false;
            }
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