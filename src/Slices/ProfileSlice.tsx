import { createSlice } from "@reduxjs/toolkit";
const ProfileSlice = createSlice({
    name:"profile",
    initialState:({
        id: 0,
        name: '',
        about: '',
        skills: [],
        role: '',
        company: '',
        location: '',
        expriences: [],
        certifications: [],
        email: '',
        picture: ''
    }),
    reducers:{
        saveProfile:(state,action)=>{
          state = action.payload;
          return state;
        },  
    }
})
export default ProfileSlice.reducer;
export const {saveProfile} = ProfileSlice.actions;