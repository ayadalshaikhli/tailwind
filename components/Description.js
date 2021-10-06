import IMAGES from "../assets/img/images";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Description() {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".description",
      start: "top 50%",
      end: "bottom 0%",

      onEnter: () => {
        gsap.to(".body", {
          duration: 1.0,
          backgroundColor: "#F0B587",
          color: "#fff",
        });
      },

      onLeaveBack: () => {
        gsap.to(".body", {
          duration: 1.0,
          backgroundColor: "#440204",
        });
      },
    });
  });
  return (
    <div className="description md:ml-96 flex flex-nowrap  my-48 mx-auto max-w-7xl px-4 sm:mt-24 md:mt-24 text-center">
      <div className="picture  flex flex-col text-left">
        <Image
          className="bg-contain bg-center rounded-lg"
          src={IMAGES.brush1}
          alt=""
        />
        <h1>CONCEALER BRUSH</h1>
        <h6>Hair Length : 16mm</h6>
        <h6>Total Length : 166mm</h6>
        <h6>Brush Hair : Synthetic Hair</h6>
      </div>
      <div className="picture flex flex-col text-left ml-5">
        <Image
          className="bg-contain bg-center rounded-lg"
          src={IMAGES.brush2}
          alt=""
        />
        <h1>SHADER BRUSH</h1>
        <h6>Hair Length : 16mm</h6>
        <h6>Total Length : 166mm</h6>
        <h6>Brush Hair : Synthetic Hair</h6>
      </div>
      <div className="picture flex flex-col text-left ml-5">
        <Image
          className="bg-contain bg-center rounded-lg"
          src={IMAGES.brush3}
          alt=""
        />
        <h1>PENCIL BRUSH</h1>
        <h6>Hair Length : 18mm</h6>
        <h6>Total Length : 168mm</h6>
        <h6>Brush Hair : Synthetic Hair</h6>
      </div>
      <div className="picture flex flex-col text-left ml-5">
        <Image
          className="bg-contain bg-center rounded-lg"
          src={IMAGES.brush4}
          alt=""
        />
        <h1>SMUDGE BRUSH</h1>
        <h6>Hair Length : 11mm</h6>
        <h6>Total Length : 161mm</h6>
        <h6>Brush Hair : Synthetic Hair</h6>
      </div>
      <div className="picture flex flex-col text-left ml-5">
        <Image
          className="bg-contain bg-center rounded-lg"
          src={IMAGES.brush6}
          alt=""
        />
        <h1>BLENDING BRUSH</h1>
        <h6>Hair Length : 12mm</h6>
        <h6>Total Length : 163mm</h6>
        <h6>Brush Hair : Synthetic Hair</h6>
      </div>
      <div className="picture flex flex-col text-left ml-5">
        <Image
          className="bg-contain bg-center rounded-lg"
          src={IMAGES.brush7}
          alt=""
        />
        <h1>BLENDING BRUSH</h1>
        <h6>Hair Length : 17mm</h6>
        <h6>Total Length : 167mm</h6>
        <h6>Brush Hair : Synthetic Hair</h6>
      </div>
      <div className="picture flex flex-col text-left ml-5">
        <Image
          className="bg-contain bg-center rounded-lg"
          src={IMAGES.brush8}
          alt=""
        />
        <h1>BLENDING BRUSH</h1>
        <h6>Hair Length : 19mm</h6>
        <h6>Total Length : 169mm</h6>
        <h6>Brush Hair : Synthetic Hair</h6>
      </div>
      <div className="picture flex flex-col text-left ml-5">
        <Image
          className="bg-contain bg-center rounded-lg"
          src={IMAGES.brush9}
          alt=""
        />
        <h1>BLENDING BRUSH</h1>
        <h6>Hair Length : 17mm</h6>
        <h6>Total Length : 168mm</h6>
        <h6>Brush Hair : Synthetic Hair</h6>
      </div>
      <div className="picture flex flex-col text-left ml-5">
        <Image
          className="bg-contain bg-center rounded-lg"
          src={IMAGES.brush9}
          alt=""
        />
        <h1>BLENDING BRUSH</h1>
        <h6>Hair Length : 17mm</h6>
        <h6>Total Length : 168mm</h6>
        <h6>Brush Hair : Synthetic Hair</h6>
      </div>
      <div className="picture flex flex-col text-left ml-5">
        <Image
          className="bg-contain bg-center rounded-lg"
          src={IMAGES.brush9}
          alt=""
        />
        <h1>BLENDING BRUSH</h1>
        <h6>Hair Length : 17mm</h6>
        <h6>Total Length : 168mm</h6>
        <h6>Brush Hair : Synthetic Hair</h6>
      </div>
    </div>
  );
}

export default Description;
