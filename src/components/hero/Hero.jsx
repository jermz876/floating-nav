import Image from "next/image";
import Link from "next/link";

import React from "react";

const Hero = () => {
    return (
        <section id="hero" className="overflow-hidden  ">
            <div className="z-[-19] min-h-screen relative">
                <Image src="/banner2.jpg" alt="hero image" layout="fill" objectFit="cover" priority={true} />
                <div className="relative top-40 max-w-7xl mx-auto px-8">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-black/60 drop-shadow">Adventure Awaits</h1>
                    <Link href="/">hi</Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
