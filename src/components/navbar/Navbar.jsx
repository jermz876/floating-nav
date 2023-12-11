"use client";

import React, { useState } from "react";
import NavLinks from "./NavLinks";

import { GiHamburgerMenu } from "react-icons/gi";

import Link from "next/link";

const Navbar = () => {
    const [isvisible, setIsVisible] = useState(false);

    if (typeof window !== "undefined") {
        const checkNav = () => {
            if (window.scrollY >= 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", checkNav);
    }

    // useEffect(() => {
    //     let prevScrollPos = window.scrollY;

    //     const handleScroll = () => {
    //         const currentScrollPos = window.scrollY;
    //         const shouldShow = prevScrollPos > currentScrollPos || currentScrollPos <= 10;

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

    // const [navbar, setNavbar] = useState(false);

    // const changeNavbar = () => {
    //     if (window.scrollY >= 200) {
    //         setNavbar(true);
    //     } else {
    //         setNavbar(false);
    //     }
    // };

    // window.addEventListener("scroll", changeNavbar);

    return (
        <header
            className={
                isvisible
                    ? "fixed z-99 w-full bg-white  text-black/90 shadow-md overflow-hidden"
                    : " sm:hidden fixed z-99 w-full bg-white  text-black/90 shadow-md overflow-hidden "
            }
        >
            <div className="max-w-7xl h-14 flex justify-between items-center mx-auto px-8 ">
                <a href="/" className="border border-blue-200 p-1 bg-white rounded-lg font-bold hover:bg-blue-300 duration-500 ">
                    My.Cool.Logo
                </a>

                <nav>
                    {/* desktop navigation */}
                    <div className="hidden sm:flex ">
                        <NavLinks />

                        <button className="ml-4 text-blue-500 font-bold drop-shadow-lg">Contact</button>
                    </div>

                    {/* mobile navigation */}
                    <div className="sm:hidden">
                        <Link href="/" className="flex items-center ">
                            <GiHamburgerMenu className="ml-4" />
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
