import React from "react";

const Newsletter = () => {
    return (
        <section id="news" className="w-full text-white bg-black">
            <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 py-16 px-8">
                <div className="lg:col-span-2 mb-4">
                    <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold">Where Dreams Come True.</h2>
                    <p>Sign up to our newsletter and stay up to date</p>
                </div>
                <div className="">
                    <div className="flex flex-col sm:flex-row items-center justify-between w-full ">
                        <input type="email" placeholder="Enter Email" className="p-3 flex w-full rounded-md text-black" />
                        <button className=" bg-slate-300 w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-3 text-black">Sign Me Up</button>
                    </div>
                    <p>
                        We care about your privacy. Read our <span className="text-blue-200 font-semibold">Privacy Policy</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
