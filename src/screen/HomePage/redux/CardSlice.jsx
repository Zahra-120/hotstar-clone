import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    latestReleases : [],
    popular : [],
    topRated : [],
    tv : [],
    loading : false,
    error : '',
}

const cardSlice = createSlice({
    name : 'movies',
    initialState : initialState,
    reducers : {
      fetchMoviesStart(state) {
        state.loading = true;
        state.error = '';
      },
      fetchMoviesSuccess(state, action) {
        state.loading = false;
        state.latestReleases = action.payload;
      },
      fetchPopularSuccess(state, action) {
        state.loading = false;
        state.popular = action.payload;
      },
      fetchTopRatedSuccess(state, action) {
        state.loading = false;
        state.topRated = action.payload;
      },
      fetchTvSuccess(state, action) {
        state.loading = false;
        state.tv = action.payload;
      },
      fetchMoviesFailure(state, action) {
        state.loading = false;
        state.error = action.payload
      }
    }
})

export const { fetchMoviesStart, fetchMoviesSuccess, fetchPopularSuccess, fetchTopRatedSuccess, fetchTvSuccess, fetchMoviesFailure, } = cardSlice.actions; 
export default cardSlice.reducer;