import React from 'react'
import Slider from 'react-slick'
import Poster from '../Poster/Poster.Component'

const PosterSlider = (props) => {
  const { posters, title, subtitle, isDark } = props;   //Home.Page.jsx- 27 to 32

  const settings = {
    infinite: false,
    autoplay: false,
    slidesToShow:5,
    slidesToScroll: 4,
    initialSlide: 0,
  
  };
  return (
    <>
      <div className="flex flex-col items-start sm:ml-3 my-2">
        <h3
          className={`text-2xl font-bold ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h3>
        <p className={`text-sm  ${isDark ? "text-white" : "text-gray-800"}`}>
          {subtitle}
        </p>
      </div>
        <Slider {...settings}>                {/* This is due to React-slice */}
          {posters.map((each, index) => (
            <Poster {...each} isDark={isDark} key={index} />
          ))}
        </Slider>
    </>
  );
};

export default PosterSlider



// import React from 'react'
// import Slider from 'react-slick'


// const PosterSlider = () => {
//   return (
//     <div>PosterSlider</div>
//   )
// }

// export default PosterSlider