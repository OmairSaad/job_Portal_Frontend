import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name:"ddd",
    initialState: {},
    reducers:{
        updateFilter: (state,action)=>{
            state = {...state, ...action.payload};
            console.log(state);
            return state;
        },

        resetFilter: (state)=>{
            state = {};
            return state;
        }
    }
})

export default filterSlice.reducer;
    export const {resetFilter,updateFilter}  = filterSlice.actions;