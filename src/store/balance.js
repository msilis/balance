import { createSlice } from "@reduxjs/toolkit";

export const balanceSlice = createSlice({
    name: 'balance',

    initialState: {
        balance: 0,
    },

    reducers: {

        withdrawBalance: (state, action) => {
            state.balance -= action.payload;
        },

        depositBalance: (state, action) => {
            state.balance += action.payload;
        },

        interestBalance: (state) => {
            state.balance += (state.balance * .05);
        },

        chargesBalance: (state) => {
            state.balance -= (state.balance * .15)
        }
    }
});

export const { withdrawBalance, depositBalance, interestBalance, chargesBalance } = balanceSlice.actions;

export default balanceSlice.reducer;
