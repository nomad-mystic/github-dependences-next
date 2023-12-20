import { createSlice } from '@reduxjs/toolkit';



const authSlice = createSlice({
    name: 'auth',
    initialState: true,
    reducers: {
        loginIn(state, action) {
            state = true;
        },
        loginOut(state, action) {
            state = false;
        },
    },
});

export const authActions = authSlice.actions;

export default authSlice;
