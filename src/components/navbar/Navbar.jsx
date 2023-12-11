"use client";

import React, { useState, useEffect } from "react";
import NavLinks from "./NavLinks";

import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    // const [isvisible, setIsVisible] = useState(false);

    // useEffect(() => {
    //     let prevScrollPos = window.scrollY;

    //     const handleScroll = () => {
    //         const currentScrollPos = window.scrollY;
    //         const shouldShow = prevScrollPos > currentScrollPos || currentScrollPos <= 100;

    //         setIsVisible(shouldShow);
    //         prevScrollPos = currentScrollPos;
    //     };

    //     window.addEventListener("scroll", handleScroll);

    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);

    // CHECK IF MOBILE
    // const isMobile = window.innerWidth <= 768;

    const [navbar, setNavbar] = useState(false);
    const [ismobile, setIsMobile] = useState(false);

    const changeNavbar = () => {
        if (window.scrollY >= 200) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    window.addEventListener("scroll", changeNavbar);

    return (
        <header
            className={
                navbar
                    ? "fixed z-99 w-full bg-white bg-opacity-90 text-black/90 shadow-md backdrop-blur-sm overflow-hidden "
                    : " sm:hidden fixed z-99 w-full bg-white bg-opacity-90 text-black/90 shadow-md backdrop-blur-sm overflow-hidden   "
            }
        >
            <div className="max-w-7xl h-14 flex justify-between items-center mx-auto px-8 ">
                <a href="/" className="border-2 border-black p-1 bg-blue-300 rounded-lg font-bold ">
                    My.Cool.Logo
                </a>

                <nav>
                    {/* desktop navigation */}
                    <div className="hidden sm:flex">
                        <NavLinks />
                        <button className="ml-4 text-blue-500 font-bold drop-shadow-lg">Contact</button>
                    </div>

                    {/* mobile navigation */}
                    <div className="sm:hidden">
                        <GiHamburgerMenu />
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
