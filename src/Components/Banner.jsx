import React from 'react';
import { FaAppStoreIos } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import bannerimg from "../assets/hero.png";

const Banner = () => {
    return (
        <div className="bg-[#F5F5F5]" >
            <div className="flex flex-col items-center justify-center  gap-6  max-w-7xl mx-auto pt-12">
                <h1 className="text-4xl md:text-6xl text-secondary font-extrabold">We Build</h1>
                <h1 className="text-4xl md:text-6xl font-extrabold">
                    <span className="text-primary me-2">Productive</span>
                    Apps
                </h1>
                <p className="text-center text-[#627382] w-3/4 mx-auto text-normal">At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div>
                    <a className="btn text-white gradient-primary me-2"><FaGooglePlay />Google Play</a>
                    <a className="btn text-white gradient-primary"><FaAppStoreIos />App Store</a>
                </div>
            </div>
            <div className="flex items-center justify-center mt-8 mx-2">
                <img src={bannerimg} alt="banner_image" />
            </div>
        </div>
        );
};

export default Banner;