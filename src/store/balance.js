import { createSlice } from "@reduxjs/toolkit";

export const balanceSlice = createSlice({
    name: 'balance',

    //Set initial balance
    initialState: {
        balance: 0,
    },

    reducers: {
        //take money out
        withdrawBalance: (state, action) => {
            state.balance -= action.payload;
        },
        //put money in
        depositBalance: (state, action) => {
            state.balance += action.payload;
        },
        //collect interest
        interestBalance: (state) => {
            state.balance += (state.balance * .05);
        },
        //get charged fees
        chargesBalance: (state) => {
            state.balance -= (state.balance * .15)
        }
    }
});

export const { withdrawBalance, depositBalance, interestBalance, chargesBalance } = balanceSlice.actions;

export default balanceSlice.reducer;
