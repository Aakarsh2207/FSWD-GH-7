import React, { useState } from 'react'
import HeroSlider from "react-slick";       //import Slider from "react-slick";     ..."Slider" can be written as "HeroSlider"

const HeroCarousel = () => {
    const [images, setImages]= useState([]);

  return (
    <>            {/* Fragments */}
        <div className='lg:hidden'>            {/* On Larger Screen Size - Code will be Hidden, Vissible on Smaller & Medium Screen Size */}
            <HeroSlider>
                {
                    images.map((images)=>(
                        <div className='w-full h-56 md:h-80 py-3'>
                            <img src="" alt="hero bannner" className='w-full h-full rounded-md object-cover' />
                        </div>
                    ))
                }
            </HeroSlider>
        </div>
        <div className='hidden lg:block'></div>             {/* On Larger Screen Size - Code will be Vissible, Hidden on Smaller & Medium Screen Size */}
    </>
  )
}

export default HeroCarousel