import React, { useEffect, useState } from 'react'
import style from './Navbar.module.css'
import logoImage from "./../../assets/images.jpeg"

export default function Navbar() {
    const [navbar, setNavbar] = useState(false)
    const [burger, setburger] = useState(false)
    // useEffect(() => {
    //     const change = () => {
    //         if (window.scrollY > 0) {
    //             setNavbar(true);
    //         } else if (window.scrollY <= 0 && burger === false) {
    //             setNavbar(false);
    //         }
    //         window.addEventListener("scroll", change)
    //     }
    // });

    return <>
        <nav className={`border-gray-200  fixed w-full z-40 ${navbar ? "navbar_active" : "navbar_background_color"}`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 px-9 text-white ">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className={`logo py-0.5 px-3  flex flex-col rounded-2xl  uppercase items-center transition-all ${navbar ? "text-red-500" : "text-white"}`}>
                        <h1 className='font-bold text-xl'>Crimson</h1>
                        <span className="font-light text-xs" style={{ letterSpacing: "4px" }}>
                            resturant
                        </span>
                    </div>
                </a>
                <div className={` w-full md:block md:w-auto hidden`} id="navbar-solid-bg">
                    <ul className={`${navbar ? "active_navbar_link" : ""} flex flex-col font-medium mt-4 rounded-lg uppercase  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 `}>
                        <li>
                            <a href="#" className="block py-2 px-3 md:p-0  hover:text-red-500 transition-all" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 md:p-0  hover:text-red-500 transition-all">Menu</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 md:p-0  hover:text-red-500 transition-all">Reservation</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 md:p-0  hover:text-red-500 transition-all">Contact</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className={`md:flex gap-3 hidden ${navbar ? "active_navbar_link" : ""}`}>
                        <li><a href="https://www.instagram.com/crimsoncairo/?hl=en" target='_blank'><i className="fa-brands fa-instagram"></i></a></li>
                        <li><a href="https://www.facebook.com/CrimsonCairo/" target='_blank'><i className="fa-brands fa-facebook-f"></i></a></li>
                    </ul>
                    <button onClick={() => { setburger(!burger) }} data-collapse-toggle="navbar-solid-bg" type="button" className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden ${!burger && "hidden"}`} aria-controls="navbar-solid-bg" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className={` navbar_active fixed w-screen h-screen top-0 left-0  ${burger ? "translate-x-0" : "translate-x-[100%]"}`}>
                <i onClick={() => { setburger(!burger) }} className={`fa-solid fa-xmark absolute right-20 top-20 text-2xl cursor-pointer hover:text-red-500 transition-colors `}></i>
                <ul className={` flex flex-col font-medium uppercase justify-center items-center text-center h-full gap-3.5`}>
                    <li>
                        <a href="#" className="block py-2 px-3 md:p-0  hover:text-red-500 transition-colors" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 md:p-0  hover:text-red-500 transition-colors">Menu</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 md:p-0  hover:text-red-500 transition-colors">Reservation</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 md:p-0  hover:text-red-500 transition-colors">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    </>
}

