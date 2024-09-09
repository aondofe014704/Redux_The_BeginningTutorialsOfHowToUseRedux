import React from 'react'
import { useGetAllNowPlayingMoviesQuery } from '../service/api';

const NowPlayingMovies = () => {
const response = useGetAllNowPlayingMoviesQuery();
console.log(response);

return (
  <div>NowPlayingMovies</div>
)

}




export default NowPlayingMovies