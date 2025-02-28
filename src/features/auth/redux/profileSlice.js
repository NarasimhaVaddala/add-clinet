import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../core/url";

const initialState = {
  userProfile: null,
  loading: false,
  error: null,
};

export const fetchUserProfile = createAsyncThunk(
  "profile/fetchUserProfile",
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.get("/auth/profile");

      return response.data;
    } catch (error) {
      console.log(error.response.data);

      if (error?.response?.data?.message) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.userProfile = action.payload;
    },
    resetProfile: (state) => {
      state.userProfile = null;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.userProfile = action.payload;
        state.loading = false;
      })

      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.error = action.payload || "Something went wrong";
        state.loading = false;
      });
  },
});

export const { setProfile, resetProfile } = profileSlice.actions;

export default profileSlice.reducer;
