import { __DO_NOT_USE__ActionTypes, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { base_url } from "../Baseurl";
import { Job } from "../Interfaces/PostJob";
import { UserProfile } from "../Interfaces/UserProfile";


// Define thunks for each API call
export const addJob = createAsyncThunk(
    "jobs/addJob",
    async ({ data, id  }: { data: Job, id: number }, { rejectWithValue }) => {
        console.log(data, id);
        try {
            const transformedData = {
                ...data,
                skills: data.skills?.map((skill) => ({ skillName: skill })),
            };
            const response = await axios.post(`${base_url}jobs/user/${id}`, transformedData);
            return response.data;
        } catch (error) {
            const axiosError = error as AxiosError<{ message: string }>;
            return rejectWithValue(axiosError.response?.data);
        }
    }
);

export const getAllJobs = createAsyncThunk(
    "jobs/getAllJobs",
    async ({ userId }: { userId: number }, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${base_url}jobs/getAll/${userId}`);
            return response.data;
        } catch (error) {
            console.log(error);
            const axiosError = error as AxiosError<{ message: string }>;
            return rejectWithValue(axiosError.response?.data);
        }
    }
);

export const getJobById = createAsyncThunk(
    "jobs/getJobById",
    async ({ jobId, userId }: { jobId: number, userId: number }, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${base_url}jobs/${jobId}/user/${userId}`);
            return response.data;
        } catch (error) {
            const axiosError = error as AxiosError<{ message: string }>;
            return rejectWithValue(axiosError.response?.data);
        }
    }
);

export const getProfilesOfApplicantsByJobId = createAsyncThunk(
    "jobs/getProfilesOfApplicants",
    async (id, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${base_url}jobs/${id}/applicant-profiles`);
            return response.data;
        } catch (error) {
            const axiosError = error as AxiosError<{ message: string }>;
            return rejectWithValue(axiosError.response?.data);
        }
    }
)
export const getJobsByUserId = createAsyncThunk(
    "jobs/getJobByUserId",
    async (id, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${base_url}jobs/user/${id}`);
            return response.data;
        } catch (error) {
            const axiosError = error as AxiosError<{ message: string }>;
            return rejectWithValue(axiosError.response?.data);
        }
    }
);

export const applyJob = createAsyncThunk(
    "jobs/applyJob",
    async ({ jobId, userId, data }: { jobId: number, userId: number, data: Job }, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${base_url}jobs/${jobId}/user/${userId}`, data);
            return response.data;
        } catch (error) {
            const axiosError = error as AxiosError<{ message: string }>;
            return rejectWithValue(axiosError.response?.data);
        }
    }
);

export const saveToggleJob = createAsyncThunk("jobs/toggle-save", async ({ jobId, userId }: { jobId: number, userId: number }, { rejectWithValue }) => {
    console.log({ jobId, userId });
    try {
        const response = await axios.post(`${base_url}jobs/${jobId}/user/${userId}/toggle-save`);
        return response.data;
    } catch (error) {
        console.log(error);
        const axiosError = error as AxiosError<{ message: string }>;
        return rejectWithValue(axiosError.response?.data);
    }
})

//aplicants by job id
export const getApplicantsByJobId = createAsyncThunk(
    "jobs/getApplicantsByJobId",
    async (id, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${base_url}jobs/${id}/applicants`);
            return response.data;
        } catch (error) {
            const axiosError = error as AxiosError<{ message: string }>;
            return rejectWithValue(axiosError.response?.data);
        }
    }
);

//update applicant status
export const updateApplicationStatus = createAsyncThunk(
    "jobs/applicant/update-satus", async ({ id, data }: { id: number, data: updateStatus }, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${base_url}jobs/applicants/${id}/update-status`, data);
            console.log(data);
            return response.data;
        } catch (error) {
            const axiosError = error as AxiosError<{ message: string }>;
            return rejectWithValue(axiosError.response?.data);
        }
    })

export const getAllProfiles = createAsyncThunk(
    "profiles/getAllProfiles", async (_,{rejectWithValue})=>{
        console.log((".................................................."))
        try{
           const response = await axios.get(`${base_url}profiles`); 
           return response.data;
        }catch(error){
            const axiosError = error as AxiosError<{ message: string }>;
            return rejectWithValue(axiosError.response?.data);
        }
})

export const getProfileById = createAsyncThunk(
    "profiles/getProfileById", async (id,{rejectWithValue})=>{
        try{
           const response = await axios.get(`${base_url}profiles/getById/${id}`); 
           return response.data;

        }catch(error){
            const axiosError = error as AxiosError<{ message: string }>;
            return rejectWithValue(axiosError.response?.data);
        }
}) 

export const deleteJob = createAsyncThunk("/jobs/", async(id:number, {rejectWithValue})=>{
    try{
        const response = await axios.delete(`${base_url}jobs/${id}`);
        return response.data;
    }catch(error){
        const axiosError = error as AxiosError<{ message: string }>;
        return rejectWithValue(axiosError.response?.data);
    }
});

interface updateStatus {
    applicationStatus: string,
    interviewDate: Date,
    interviewTime: string
}
export interface ApplicantWithProfile {
    applicantId: number;
    timestamp: string; // ISO date string
    applicationStatus: "APPLIED" | "REJECTED" | "INTERVIEWING" | "OFFERED"; // Extend as needed
    name: string;
    email: string;
    phone: string;
    website: string;
    cover: string;
    resume: string;
    profile: UserProfile,
    interviewDate:string,
    interviewTime:string,
}
interface JobSliceIn {
    jobs: Job[],
    job: Job,
    applicants: ApplicantWithProfile[],
    profiles: [],
    loading: boolean,
    error: string | null,
    successMessage: { message: string; id: number } | null; // Updated
    profile: UserProfile
}
// Define the initial state
const initialState: JobSliceIn = {
    jobs: [],
    profiles: [],
    applicants: [],
    job: { company: "", experience: "", jobDescription: "", jobTitle: "", jobType: "", location: "", postedAgo: "", salary: 0, applicantTimestamp: "", applicationStatus: "", jobStatus: "", saved: false },
    loading: false,
    error: null,
    successMessage: null,
    profile: {
        id: 0,
        email: "",
        name: "",
        role: "",
        location: "",
        about: "",
        company: "",
        skills: [],
        expriences: [],
        certifications: [],
        picture: "",
        totalExprience:0
    }
};

// Create the slice
const jobSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {
        clearSuccessMessage: (state) => {
            state.successMessage = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // Add Job
            .addCase(addJob.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.successMessage = null;
            })
            .addCase(addJob.fulfilled, (state, action) => {
                console.log("Job added successfully:", action.payload);
                state.loading = false;
                state.jobs.push(action.payload.data);
                state.successMessage = { message: action.payload.message, id:1 };
            })
            .addCase(addJob.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.errorMessage || "Something went wrong";
            })

            // Get All Jobs
            .addCase(getAllJobs.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllJobs.fulfilled, (state, action) => {
                state.loading = false;
                state.jobs = action.payload;
            })
            .addCase(getAllJobs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.errorMessage || "Something went wrong";
            })

            // Get Job By ID
            .addCase(getJobById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getJobById.fulfilled, (state, action) => {
                state.loading = false;
                state.job = action.payload;
            })
            .addCase(getJobById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.errorMessage || "Something went wrong";
                state.job = { company: "", experience: "", jobDescription: "", jobTitle: "", jobType: "", location: "", postedAgo: "", salary: 0, applicantTimestamp: "", applicationStatus: "", jobStatus: "", saved: false };
            })

            // Get Job By User ID
            .addCase(getJobsByUserId.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getJobsByUserId.fulfilled, (state, action) => {
                state.loading = false;
                state.jobs = action.payload;
            })
            .addCase(getJobsByUserId.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            // Apply Job
            .addCase(applyJob.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.successMessage = null;
            })
            .addCase(applyJob.fulfilled, (state, action) => {
                state.loading = false;
                state.job.applicants?.push(action.payload);
                state.successMessage = {message:"Applied Succesfully", id:2};
            })
            .addCase(applyJob.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.errorMessage || "Something went wrong";
            })

            //saveJob
            .addCase(saveToggleJob.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.successMessage = null;
            })
            .addCase(saveToggleJob.fulfilled, (state, action) => {
                state.job = state.job.id === action.meta.arg.jobId ? { ...state.job, saved: !state.job.saved } : state.job;
                state.jobs = state.jobs.map(job =>
                    job.id === action.meta.arg.jobId ? { ...job, saved: !job.saved } : job
                );
                state.loading = false;
                state.error = null;
                state.successMessage = { message: action.payload, id:3 };
            })
            .addCase(saveToggleJob.rejected, (state, action) => {
                state.loading = false;
                console.log(action.payload);
                state.error = action.payload.errorMessage || "Something went wrong";
            })


            //getApplicantProfiles
            .addCase(getProfilesOfApplicantsByJobId.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.successMessage = null;
            })
            .addCase(getProfilesOfApplicantsByJobId.fulfilled, (state, action) => {
                state.profiles = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(getProfilesOfApplicantsByJobId.rejected, (state, action) => {
                state.loading = false;
                console.log(action.payload);
                state.error = action.payload.errorMessage || "Something went wrong";
            })

            //all aplicants
            .addCase(getApplicantsByJobId.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getApplicantsByJobId.fulfilled, (state, action) => {
                state.loading = false;
                state.applicants = action.payload;
            })
            .addCase(getApplicantsByJobId.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.errorMessage || "Something went wrong";
            })

            //update status of applicants
            .addCase(updateApplicationStatus.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateApplicationStatus.fulfilled, (state, action) => {
                state.loading = true;
                state.error = null;
                const index = state.applicants.findIndex(applicant => applicant.applicantId === action.payload.applicantId);
                state.applicants[index] = action.payload;
                state.successMessage = {message:action.payload.applicationStatus, id:4};
            })
            .addCase(updateApplicationStatus.rejected, (state,action) => {
                state.loading = false;
                state.error = action.payload.errorMessage || "Something went wrong";
            })

            //get all profiles
            .addCase(getAllProfiles.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllProfiles.fulfilled, (state, action) => {
                state.loading = false;
                state.profiles = action.payload;
            })
            .addCase(getAllProfiles.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.errorMessage || "Something went wrong";
            })

            //get Profile by Id
            .addCase(getProfileById.pending,(state)=>{
                state.loading = true;
                state.error = null;
            })
            .addCase(getProfileById.fulfilled, (state, action) => {
                state.loading = false;
                state.profile = action.payload;
            })
            .addCase(getProfileById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.errorMessage || "Something went wrong";
            })

            //delete job
            .addCase(deleteJob.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.successMessage= null
            })
            .addCase(deleteJob.fulfilled, (state, action) => {
                state.loading = false;
                state.jobs = state.jobs.filter(job => job.id !== action.meta.arg);
                state.successMessage= {message:"Deleted Successfully",id:0}
            })
            .addCase(deleteJob.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.errorMessage || "Something went wrong";
            })
    },
});
export const { clearSuccessMessage } = jobSlice.actions;
export default jobSlice.reducer;