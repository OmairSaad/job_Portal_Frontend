import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { base_url } from "../Baseurl";

// export const addJob = createAsyncThunk(
//     "jobs/addJob",
//     async ({ data, id  }: { data: Job, id: number }, { rejectWithValue }) => {
//         console.log(data, id);
//         try {
//             const transformedData = {
//                 ...data,
//                 skills: data.skills?.map((skill) => ({ skillName: skill })),
//             };
//             const response = await axios.post(`${base_url}jobs/user/${id}`, transformedData);
//             return response.data;
//         } catch (error) {
//             const axiosError = error as AxiosError<{ message: string }>;
//             return rejectWithValue(axiosError.response?.data);
//         }
//     }
// );

interface filterPayloadInterface{
    locations:string[],
    roles:string[],
    name:string,
    skills: string[],
    minimumExperience:number,
    maximumExperience:number
}
export const getFilterProfile = createAsyncThunk(
    "profiles/filter",
    async (data:filterPayloadInterface, {rejectWithValue})=>{
      try {
        const response = await axios.post(`${base_url}profiles/filter`, data);
        console.log(response.data)
        return response.data;
      } catch (error) {
        const axiosError = error as AxiosError<{message:string}>;
        console.log(error);
        return rejectWithValue(axiosError.response?.data);
      }
    }
)



interface filterPayloadInterface {
  locations: string[];
  roles: string[];
  name: string;
  skills: string[];
  minimumExperience: number;
  maximumExperience: number;
}

const initialState = {
  loading: false,
  error: null as string | null,
  filteredProfiles: [],
  filterTerm: {
    locations: [] as string[],
    roles: [] as string[],
    name: "",
    skills: [] as string[],
    minimumExperience: 0,
    maximumExperience: 0,
  } as filterPayloadInterface,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateFilter: (state, action) => {
      state.filterTerm = {
        ...state.filterTerm,
        ...action.payload, // only update the changed field
      };
    },
    resetFilter: (state) => {
      state.filterTerm = initialState.filterTerm; // reset to initial object
      state.error = null;
      state.loading = false;
      state.filteredProfiles = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFilterProfile.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(getFilterProfile.fulfilled, (state, action) => {
        state.filteredProfiles = action.payload;
        state.loading = false;
      })
      .addCase(getFilterProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Something went wrong";
      });
  },
});




export default filterSlice.reducer;
export const {resetFilter,updateFilter}  = filterSlice.actions;