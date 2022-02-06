import React, { useEffect } from "react";
import { useState } from "react";
import Slider from "react-slick";
import { useRouter } from "next/router";


const images = ["astronaut", "celebrating", "education", "taken"];

function Index() {
  const router = useRouter();

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>

      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    autoPlay: true,
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    centerPadding: "60px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    dots: true,
    autoplaySpeed: 5000,
    autoplay: true,

  };

  const Avatar = () => (
    <div className="focus:outline-none h-14 w-14 mx-2 shadow-lg">
      <img src="/Nike.png" alt="man avatar" className="h-full w-full rounded-full overflow-hidden  border-2 border-green-300" />
    </div>
  )

  return (
    <div className="h-screen w-full bg-blackblue ">
      <div className="h-3/4 mx-auto pt-16 ">
        <Slider {...settings} >
          {images.map((img, idx) => (
            <div key={idx} className={`${idx === imageIndex ? "slide activeSlide" : "slide"}  h-[350px] bg-contain rounded-3xl bg-[url('/Nike.png')]`} >
              <div className="text-white text-3xl ml-8  mt-20" src='' alt='hey there' >
                <p className="">Nike Air</p>
                <p className="">Jordan</p>
              </div>
              <div className="p-1 ml-8 bg-green-500 text-gray-100 rounded-md shadow-lg w-20 h-5 flex hover:cursor-pointer" onClick={()=> router.push('/product') }>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                <p className="text-[0.5rem] ml-1">Watch Now</p>
              </div>
              <p className="w-1/3 ml-8 mt-4 text-[0.4rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio distinctio reprehenderit perferendis blanditiis cumque molestias ducimus harum eius, nulla non!</p>
            </div>
          ))}
        </Slider>
      </div>
      <div className="px-10 flex w-full">
        <div className="pt-2 flex bg-gray-600 rounded-2xl h-14 px-5 w-1/4 justify-between">
          <input className=" bg-gray-600 text-white focus:outline-none" type="search" name="search" placeholder="Search" />
          <button type="submit" className="">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
        <div className="flex flex-wrap">
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
        </div>
      </div>

    </div>
  );
}

export default Index;