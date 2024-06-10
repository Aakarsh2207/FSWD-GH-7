// Context API
// Movie.context.jsx - needed so that We can store/edit/update data from any component & then can access it in any of the component

import React, { createContext, useState } from 'react'

export const MovieContext = createContext()

const MovieProvider = ({ children }) => {

  const [movie, setMovie] = useState({
    id: 0,
    original_title: "",
    overview: "",
    backdrop_path: "",
    poster_path: "",
  })

  return <MovieContext.Provider value={{movie, setMovie }}>{children}</MovieContext.Provider>;      //This file can be accessed among any of the Components file
}

export default MovieProvider;