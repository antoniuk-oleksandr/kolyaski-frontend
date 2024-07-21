import {createSlice} from "@reduxjs/toolkit";
import {TokenInfo} from "@/types/TokenInfo";

type InitialStateType = {
    tokenInfo: null | TokenInfo | undefined,
}

const initialState: InitialStateType = {
    tokenInfo: undefined,
}

export const tokenSlice = createSlice({
    name: "token",
    initialState,
    reducers: {
        setTokenInfo: (state, action) => {
            state.tokenInfo = action.payload;
        }
    }
});

export const {setTokenInfo} = tokenSlice.actions;

export default tokenSlice.reducer;