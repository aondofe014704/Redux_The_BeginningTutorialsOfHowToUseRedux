import {createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.REACT_APP_MOVIE_BASE_URL
const apiKey = process.env.REACT_APP_API_KEY


export const movieApi = createApi({
    reducerPath: "movies",
    baseQuery : fetchBaseQuery({baseUrl : `${baseUrl}`}),
    endpoints : (builder) => ({
        getAllNowPlayingMovies : builder.query({
            query: () => `/now_playing?api_key=${apiKey}`}),
        }),
    })
    export const {useGetAllNowPlayingMoviesQuery} = movieApi;
