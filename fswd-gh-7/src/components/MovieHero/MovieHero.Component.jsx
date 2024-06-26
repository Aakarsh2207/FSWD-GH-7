import React, { useContext, useState } from 'react';
import { MovieContext } from '../../context/Movie.context';
import MovieInfo from './MovieInfo.Component';

const MovieHero = () => { 
  const { movie, price, setIsOpen, isOpen, rentMovie, buyMovie } = useContext(MovieContext);

  const genres = movie.genres?.map(({ name }) => name).join(", ");      //Can be " " <space> OR ",  " OR "/" etc. as per your requirement
//   console.log(genres)
  return (
      <div>
        {/* Mobile and Tab Screen i.e., small and medium screen size */}
        <div className='lg:hidden w-full'>
          <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt='Cover Poster' className='m-4 rounded' />
        </div>
        <div className='flex flex-col gap-3 lg:hidden'>
          <div className='flex flex-col-reverse gap-3 px-4 my-3'>
            <div className='text-black flex flex-col gap-2 md:px-4'>
              <h4>5k rating</h4>
              <h4>Kannada, English, Hindi, Telgu, Tamil</h4>
              <h4>{movie.runtime} min | {genres}</h4>
            </div>
          </div>
          <div className="flex items-center gap-3 md:px-4">
            <button onClick={rentMovie} className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">Rent ₹149</button>
            <button onClick={buyMovie} className="bg-red-600 w-full py-3 text-white font-semibold rounded-lg">Buy ₹599</button>
          </div>
        </div>
        

        {/* Large Screen Size i.e., Laptop */}
        <div className='relative hidden w-full lg:block' style={{ height: "30rem" }} >
          <div className='absolute z-10 w-full h-full' style={{background: "linear-gradient(90deg, rgb(34, 34, 34) 25%, rgb(34,34,34, o.5) 60%, rgba(34,34,34,0.04) 99%)"}} >
            </div>
            <div className='absolute z-30 left-24 top-10 flex items-center gap-10'>
              <div className='w-64 h-96'>
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="Movie Poster" className="w-full h-full rounded-lg" />
              </div>
              <div>
                <MovieInfo movie={movie}  />
              </div>
            </div>
            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="Backdrop Poster" 
            className="w-full h-full object-cover object-center" />
          </div>
          
        </div>
      
  )
}

export default MovieHero