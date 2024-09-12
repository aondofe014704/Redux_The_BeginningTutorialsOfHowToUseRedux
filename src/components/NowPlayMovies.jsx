import React from 'react'
import { useGetAllNowPlayingMoviesQuery } from '../service/api';
import style from "./NowPlayingMovie.module.css"
 
const img = process.env.REACT_APP_MOVIE_IMAGES
console.log(img)


const NowPlayingMovies = () => {
const {data, isLoading, isError} = useGetAllNowPlayingMoviesQuery();
console.log(data);

if (isLoading) {
  return <div><h1>Loading...</h1></div>
}

if(isError){
  return <div><h1>An Error Occured</h1></div>

}

return (

        <div className={style.mainWrapper} >
          <div className={style.container}>
          {data?.results?.map((movie) =>(
            <div className={style.movie} key={movie.id} >
              <img className={style.img} src={`${img}${movie.poster_path}`} alt={movie.over}/>
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
              <p>{movie.released_date}</p>
            </div>
        
      ))};
          </div>
        </div>
  )
}

export default NowPlayingMovies
