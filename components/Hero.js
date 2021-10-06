import Link from "next/link";
import React, { useEffect } from "react";
import IMAGES from "../assets/img/images";
import Image from "next/image";

import { gsap, Expo } from "gsap";

export default function Hero() {
  useEffect(() => {
    gsap.from(".firstimg", 2, {
      y: "400",
      stagger: ".1",
      ease: Expo.easeInOut,
    });
    gsap.to(".title", 3, {
      opacity: "1",
      scale: "1.1",
      stagger: ".1",
      ease: Expo.easeInOut,
    });
  });

  return (
    <div
      className="flex flex-col  main-page"
      style={{
        fontFamily: "Belleza",
      }}
    >
      <div className="text-white text-center md:mt-20 title opacity-0 my-48 mx-auto max-w-7xl px-4 sm:mt-24 ">
        <h1 className="text-7xl text-red-800 title	">DUcare</h1>
        <p className="text-5xl title">Professional</p>
        <p className="title">Top Nature Hair / Wooden Handle</p>
        <button className="rounded text-red-800 p-2 border-2 border-red-800 border-opacity-100 mt-5">
          Shop Now
        </button>
      </div>
      <div className=" md:ml-96 flex my-48 mx-auto max-w-7xl px-4 sm:mt-24 md:mt-1 text-center">
        <div className=" firstimg overflow-hidden  ml-10 ">
          <Image
            className="bg-contain bg-center"
            src={IMAGES.background1}
            alt=""
          />
        </div>
        <div className=" firstimg overflow-hidden  ml-10">
          <Image
            className="w-100 h-100 overflow-hidden"
            src={IMAGES.background2}
            alt=""
          />
        </div>
        <div className="firstimg overflow-hidden  ml-10">
          <Image className="overflow-hidden" src={IMAGES.background3} alt="" />
        </div>
        <div className="firstimg overflow-hidden  ml-10">
          <Image className="overflow-hidden" src={IMAGES.background4} alt="" />
        </div>
        <div className="firstimg overflow-hidden  ml-10">
          <Image className="overflow-hidden" src={IMAGES.background5} alt="" />
        </div>
        <div className="firstimg overflow-hidden  ml-10">
          <Image className="overflow-hidden" src={IMAGES.background6} alt="" />
        </div>
        <div className="firstimg overflow-hidden  ml-10">
          <Image className="overflow-hidden" src={IMAGES.background7} alt="" />
        </div>
        <div className="firstimg overflow-hidden  ml-10">
          <Image className="overflow-hidden" src={IMAGES.background8} alt="" />
        </div>
        <div className="firstimg overflow-hidden  ml-10">
          <Image className="overflow-hidden" src={IMAGES.background9} alt="" />
        </div>
        <div className="firstimg overflow-hidden  ml-10">
          <Image className="overflow-hidden" src={IMAGES.background10} alt="" />
        </div>
        <div className="firstimg overflow-hidden  ml-10">
          <Image
            className=" overflow-hidden"
            src={IMAGES.background11}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
