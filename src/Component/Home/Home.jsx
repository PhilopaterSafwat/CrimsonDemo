import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import SimpleSlider from '../Slider/Slider.jsx';
import Capresse from "./../../assets/Capresse.jpg"
import sectionImg from "./../../assets/section.jpg"
import romanticImg from "./../../assets/romantic.jpg"
import foodImg from "./../../assets/food.jpg"
import wineImg from "./../../assets/wine.jpg"
import breakfastImg from "./../../assets/Breakfast.jpg"
import LunchImg from "./../../assets/Lunch.jpg"
import StartersImg from "./../../assets/Starters.jpg"
import DrinkImg from "./../../assets/Drink.jpg"
import HappyhourImg from "./../../assets/Happyhour.jpg"
import DesertImg from "./../../assets/Desert.jpg"
import videoImg from "./../../assets/Video.jpg"



function Home() {
  const [showVideo, setshowVideo] = useState(false)
  const [videoSrc, setVideoSrc] = useState("");
  useEffect(() => {
    const preloadSrc =
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FCrimsonCairo%2Fvideos%2F717165649355923%2F&show_text=false&width=401&t=0";

    setVideoSrc(preloadSrc);
  }, []);
  return <>
    <SimpleSlider />
    <section className='flex py-50 md:px-40 justify-center items-center gap-20 flex-wrap'>
      <div className='text-center flex flex-col gap-5 w-[500px] '>
        <h2 className='text-red-500 font-bold text-3xl title-font'>Crimson restraunt</h2>
        <h1 className='uppercase text-5xl text-black pargraph-font font-extrabold tracking-[6px]'>Welcome</h1>
        <p className='text-gray-400 montserrat'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt dicta aliquam explicabo facilis eaque, vero culpa deserunt neque? Modi culpa provident saepe deserunt at mollitia perspiciatis harum odio, impedit minus.</p>
        <a href="" className='text-gray-400 hover:text-red-500 transition-colors montserrat'><span>OUR STORY</span><i className="fa-solid fa-arrow-right ms-4"></i></a>
      </div>
      <div className='w-[400px] h-[300px] rounded-2xl overflow-hidden'>
        <img src={Capresse} alt="" className='rounded-2xl w-full h-full object-cover img_scale_transtion' style={{ objectPosition: "0px -20px" }} />
      </div>
    </section>
    <section className='relative'>
      <div className='h-[392px] flex items-center justify-center' style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${sectionImg})`,
        backgroundPosition: "top",
        backgroundAttachment: "fixed",
        backgroundSize: "cover"
      }}
      >
        <div className=' text-center'>
          <h2 className='text-3xl text-red-500 title-font'>Discover</h2>
          <h3 className='text-white text-5xl pargraph-font uppercase mt-5 tracking-[6px]'>Crimson</h3>
        </div>
      </div>
    </section>
    <section className="py-30 px-5 xl:px-50">
      <div className="flex justify-center items-start gap-y-10 flex-wrap md:flex-nowrap ">
        <div className='w-full xl:w-1/3 justify-center items-center px-4'>
          <div className="w-full rounded-2xl h-[300px] overflow-hidden text-black flex flex-col">
            <img src={romanticImg} alt="" className="rounded-2xl w-full h-full  img_scale_transtion " style={{ objectPosition: "center" }} />
          </div>
          <div className='mt-5 gap-1.5 flex flex-col'>
            <h2 className='pargraph-font-normal tracking-[4px] text-xl hover:text-red-500 transition-colors'>ROMANTIC RESTAURANT</h2>
            <p className='monstramontserrat text-gray-400 text-lg'>Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.</p>
            <a href="" className='text-gray-900 hover:text-red-500 transition-all montserrat uppercase text-sm mt-3 hover:translate-x-5'><span>learn more</span><i className="fa-solid fa-arrow-right ms-4"></i></a>
          </div>
        </div>
        <div className='w-full xl:w-1/3 justify-center items-center px-4'>
          <div className="w-full  rounded-2xl h-[300px] overflow-hidden text-black flex flex-col">
            <img src={foodImg} alt="" className="rounded-2xl w-full h-full  img_scale_transtion " style={{ objectPosition: "center" }} />
          </div>
          <div className='mt-5 gap-1.5 flex flex-col'>
            <h2 className='pargraph-font-normal tracking-[4px] text-xl hover:text-red-500 transition-colors'>DELICIOUS FOOD</h2>
            <p className='monstramontserrat text-gray-400 text-lg'>Aliquam eget aliquam magna, quis posuere risus ac justo ipsum nibh urna</p>
            <a href="" className='text-gray-900 hover:text-red-500 transition-all montserrat uppercase text-sm mt-3 hover:translate-x-5'><span>learn more</span><i className="fa-solid fa-arrow-right ms-4"></i></a>
          </div>
        </div>
        <div className='w-full xl:w-1/3 justify-center items-center px-4'>
          <div className="w-full h-[300px] rounded-2xl overflow-hidden text-black flex flex-col">
            <img src={wineImg} alt="" className="rounded-2xl w-full h-full  img_scale_transtion " style={{ objectPosition: "center" }} />
          </div>
          <div className='mt-5 gap-1.5 flex flex-col'>
            <h2 className='pargraph-font-normal tracking-[4px] text-xl hover:text-red-500 transition-colors'>RED WINES YOU LOVE</h2>
            <p className='monstramontserrat text-gray-400 text-lg'>Sed ornare ligula eget tortor tempor, quis porta tellus dictum.</p>
            <a href="" className='text-gray-900 hover:text-red-500 transition-all montserrat uppercase text-sm mt-3 hover:translate-x-5'><span>learn more</span><i className="fa-solid fa-arrow-right ms-4"></i></a>
          </div>
        </div>
      </div>
    </section>
    <section className='gallery py-20 mb-20'>
      <div className='text-center mb-10'>
        <h2 className='title-font text-red-500 text-3xl'>Discover</h2>
        <h3 className='pargraph-font tracking-[6px] text-6xl'>OUR MENU</h3>
      </div>
      <div className='flex flex-col md:flex-row justify-center gap-y-10'>
        <div className='w-full xl:w-[366px] md:gap-10 px-4 '>
          <div className="w-full rounded-2xl h-[400px] overflow-hidden text-black flex flex-col relative gallery-div">
            <img src={breakfastImg} alt="" className="rounded-2xl w-full h-full gallery_image object-cover md:object-fill " style={{ objectPosition: "center" }} />
            <button className=' gallery-button tracking-[2px] pargraph-font-normal px-8 py-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg text-2xl'>BREAKFAST</button>
          </div>
        </div>
        <div className='w-full xl:w-[366px] md:gap-10 px-4'>
          <div className="w-full rounded-2xl h-[400px] overflow-hidden text-black flex flex-col relative gallery-div">
            <img src={LunchImg} alt="" className="rounded-2xl w-full h-full gallery_image object-cover md:object-fill" style={{ objectPosition: "center" }} />
            <button className='gallery-button tracking-[2px] pargraph-font-normal px-8 py-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg text-2xl'>LUNCH</button>

          </div>
        </div>
        <div className='w-full xl:w-[366px] px-4 flex flex-col justify-between gap-y-10' >
          <div className="w-full rounded-2xl h-[185px] overflow-hidden text-black flex flex-col gallery-div relative">
            <img src={StartersImg} alt="" className="rounded-2xl w-full h-full  gallery_image object-cover" style={{ objectPosition: "center" }} />
            <button className='gallery-button tracking-[2px] pargraph-font-normal px-8 py-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg text-2xl'>STARTERS</button>
          </div>
          <div className="w-full rounded-2xl h-[185px] overflow-hidden text-black flex flex-col gallery-div relative">
            <img src={DrinkImg} alt="" className="rounded-2xl w-full h-full  gallery_image object-cover " style={{ objectPosition: "center" }} />
            <button className='gallery-button tracking-[2px] pargraph-font-normal px-8 py-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg text-2xl'>DRINK</button>

          </div>
        </div>
      </div>
      <div className='flex justify-center mt-8 flex-col md:flex-row gap-y-10'>
        <div className='w-full xl:w-[732px] md:gap-10 px-4'>
          <div className="w-full rounded-2xl h-[230px] overflow-hidden text-black flex flex-col relative gallery-div">
            <img src={HappyhourImg} alt="" className="rounded-2xl w-full h-full gallery_image object-cover postion " style={{ objectPosition: "0px 50%" }} />
            <button className=' gallery-button tracking-[2px] pargraph-font-normal px-8 py-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg text-2xl'>HAPPY HOUR</button>
          </div>
        </div>
        <div className='w-full xl:w-[366px] md:gap-10 px-4'>
          <div className="w-full rounded-2xl h-[230px] overflow-hidden text-black flex flex-col relative gallery-div">
            <img src={DesertImg} alt="" className="rounded-2xl w-full h-full gallery_image object-cover object-[0_70%] md:object-center" />
            <button className=' gallery-button tracking-[2px] pargraph-font-normal px-8 py-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg text-2xl'>DESSERT</button>
          </div>
        </div>
      </div>
    </section >
    <section className='relative mb-96'>
      <div className='h-[450px] flex items-center justify-center' style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${videoImg})`,
        backgroundPosition: "top",
        backgroundAttachment: "fixed",
        backgroundSize: "cover"
      }}
      >
        <div className='text-center flex items-center justify-center flex-col'>
          <h2 className='text-3xl text-red-500 title-font'>Discover</h2>
          <h3 className='text-white text-5xl pargraph-font uppercase mt-5 tracking-[6px]'>OUR VIDEO</h3>
          <div onClick={() => { setshowVideo(true) }} className='w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center mt-5 cursor-pointer hover:text-white hover:bg-red-500 transition-colors'><i class="fa-solid fa-play"></i></div>
          {/* <PopupVideo></PopupVideo> */}
          {showVideo && (
            <div
              className="Video_model w-screen h-screen top-0 left-0 fixed z-50 flex items-center justify-center"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
              onClick={() => setshowVideo(false)}
            >
              <div className="video" onClick={(e) => e.stopPropagation()}>
                {videoSrc ? (
                  <iframe
                    className="rounded-2xl"
                    src={videoSrc}
                    style={{ border: "none", overflow: "hidden" }}
                    width="401"
                    height="476"
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                ) : (
                  <p className="text-white">Loading video...</p>
                )}
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  </>
};
export default Home;

