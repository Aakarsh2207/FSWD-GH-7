//Write "rafce" to crate a Functional Component directly
import React, { useEffect, useState } from 'react'
import DefaultLayoutHoc from '../layout/Default.layout'
import axios from 'axios'

// Components
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.Component'
import EntertainmentCardSlider from '../components/Entertainment/EntertainmentCard.Component'
import PosterSlider from '../components/PosterSlider/PosterSlider.Component'


const HomePage = () => {
    const [recommendedMovies, setRecommendedMovies] = useState([])
    const [premierMovies, setPremierMovies] = useState([])
    const [onlineStreamEvents, setOnlineStreamEvents] = useState([])

    useEffect(() => {
        const requestTopRatedMovies = async () => {
          const getTopRatedMovies = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=4914c5a8f24b76d6304243dfc845f807");     //Movie DB API Key

          setRecommendedMovies(getTopRatedMovies.data.results);
        };
        requestTopRatedMovies();
      }, []);
    

      useEffect(() => {
        const requestPopularMovies = async () => {
          const getPopularMovies = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=4914c5a8f24b76d6304243dfc845f807");
          setPremierMovies(getPopularMovies.data.results);
        };
        requestPopularMovies();
      }, []);
    
      useEffect(() => {
        const requestUpcomingMovies = async () => {
          const getUpcomingMovies = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=4914c5a8f24b76d6304243dfc845f807");
          setOnlineStreamEvents(getUpcomingMovies.data.results);
        };
        requestUpcomingMovies();
      }, []);
    

  return (
    <>
        <HeroCarousel />
{/* JSX21- margin on x-axis = auto, Automatic Spacings along Horizontal = 4; On Medium Screen Size- Padding = 12, margin along Vetical Direction = 8  */}
        <div className='container mx-auto px-4 md:px-12 my-8'>
            <h1 className='text-2xl font-bold text-gray-800 sm:ml-3 my-3'>The Best of Entertainment</h1>
            <EntertainmentCardSlider />
        </div>

        <div className='container mx-auto px-4 md:px-12 my-8'>
            <PosterSlider 
                title= "Recommended Movies"
                subtitle="List of Recommended Movies"
                posters={recommendedMovies}
                isDark={false}
            />
        </div>
{/* JSX37 - The image should be Hidden on the Smaller Screen Size; & on >=Medium Screen Size, it should FLEXED & VISIBLE */}
        <div className='bg-premier-800 py-12'>
            <div className='container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3'>
                <div className='hidden md:flex'>
                    <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" 
                    alt="RuPay" className='w-full h-full' />
                </div>
                 <PosterSlider 
                title= "Premiers"
                subtitle="Brand new release every Friday"
                posters={premierMovies}
                isDark={true}
            />
            </div>
    
        </div>
        


        <div className='container mx-auto px-4 md:px-12 my-8'>
            <PosterSlider 
                title= "Online Streaming Events"
                subtitle="Online Streaming Events"
                posters={onlineStreamEvents}
                isDark={false}
            />
        </div>
    </>
  )
}

export default DefaultLayoutHoc(HomePage);