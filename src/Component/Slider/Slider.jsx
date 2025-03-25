import React, { useState } from "react";
import Slider from "react-slick";
import barImg from "../../assets/Bar.jpg"
import sliderImg2 from "../../assets/Slider2.jpg"
import sliderImg3 from "../../assets/slider3.jpg"
import { motion } from "motion/react"


export default function SimpleSlider() {
  const [show, setshow] = useState(false)
  const [key, setKey] = useState(0);
  const transition = {
    duration: 1.2,
    delay: 0.3,
    ease: [0.25, 1, 0.5, 1],
    stiffness: 80,
    type: "spring",
  }
  const resetAnimation = () => setKey(prev => prev + 1);

  const PrevArrow = ({ onClick, show }) => {
    return (
      <div
        className={`custom-arrow custom-prev flex`}
        style={{ opacity: !show ? "0" : "1", transition: "all 0.5 ease" }}
        onClick={() => { onClick(), resetAnimation() }}
      >
        <i class="fa-solid fa-angle-left"></i>
      </div>
    );
  };

  const NextArrow = ({ onClick, show }) => {
    return (
      <div
        className={`custom-arrow custom-next flex`}
        style={{ opacity: !show ? "0" : "1", transition: "opacity 0.5 ease" }}
        onClick={() => { onClick(), resetAnimation() }}
      >
        <i class="fa-solid fa-angle-right"></i>
      </div>
    );
  };
  var settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    prevArrow: <PrevArrow show={show} />,
    nextArrow: <NextArrow show={show} />,
    customPaging: (i) => (
      <div
      onMouseDown={()=>{resetAnimation()}}
        className="dot"
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          background: "gray",
          margin: "5px",
          transition: "background 0.3s ease",
        }}
      ></div>
    ),
    dotsClass: "custom-dots flex justify-center gap-2",
    appendDots: dots => (
      <div

        style={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };
  return <>
    <div className="h-screen"
      onMouseEnter={() => { setshow(true) }}
      onMouseLeave={() => { setshow(false) }}
    >
      <Slider className="h-full"  {...settings}>
        <div >
          <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${barImg})`, backgroundSize: "cover", backgroundPosition: "center", height: "100vh" }} className="flex items-center justify-center">
            <motion.div initial={{ x: "-100vw" }} animate={{ x: "0" }} transition={transition} key={key}>
              <div className=' text-center'>
                <h2 className='text-3xl md:text-5xl text-white title-font'>Wlecome to </h2>
                <h3 className='text-white text-5xl md:text-7xl pargraph-font uppercase mt-5 tracking-[6px]'>Crimson</h3>
              </div>
            </motion.div>

          </div>
        </div>
        <div>
          <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${sliderImg2})`, backgroundSize: "cover", backgroundPosition: "center", height: "100vh" }} className="flex items-center justify-center">
            <motion.div initial={{ y: "100vh" }} animate={{ y: "0px" }} transition={transition} key={key}>
              <div className=' text-center'>
                <h2 className='text-3xl md:text-5xl text-white title-font'>Wlecome to </h2>
                <h3 className='text-white text-5xl md:text-7xl pargraph-font uppercase mt-5 tracking-[6px]'>Crimson</h3>
              </div>
            </motion.div>
          </div>
        </div>
        <div>
          <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${sliderImg3})`, backgroundSize: "cover", backgroundPosition: "center", height: "100vh" }} className="flex items-center justify-center">
            <motion.div initial={{ y: "-100vh", opacity: "0" }} animate={{ y: "0", opacity: "1" }} transition={{ type: "spring", stiffness: 100 }} key={key}>
              <div className=' text-center'>
                <h2 className='text-3xl md:text-5xl text-white title-font'>Wlecome to </h2>
                <h3 className='text-white text-5xl md:text-7xl pargraph-font uppercase mt-5 tracking-[6px]'>Crimson</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </Slider>
    </div >
  </>
}