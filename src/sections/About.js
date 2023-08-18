import React, { Component } from "react";
import AnimatedText from "../components/AnimatedText";
import AboutPictures from "../components/AboutAOS";
import Fadein from "../components/AboutAOS";

const About = () => {
  return (
    <>
      <section
        id="aboutSection"
        className="flex flex-wrap items-center justify-center min-h-screen w-full border-t border-slate-500" 
        style={{
          backgroundImage: "url(/img/finalTexture.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
        }}
      >
        <div className="w-1/2 min-h-screen ">
          {/* Add Picture fade in component here */}
          <AboutPictures />
        </div>
        <div className="w-1/2 min-h-screen flex flex-col -ml-10 justify-center items-center ">
          {/* add margins so that Animated text overlaos */}
          <div className="mb-">
            <h1 className="font-cg text-4xl font-extrabold mt-0">The Tea On Me :)</h1>
          </div>
          <h2 className="text-lg font-cg italic font-bold uppercase text-dark/75">
            About Me
          </h2>
          <p className="my-4 pr-8 font-medium font-cg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <p className="mb-4 font-medium pr-8 font-cg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation.
          </p>

          <p className="font-medium pr-8 font-cg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
        </div>
        <div className=" font-cg self-end -ml-5  mb-20">
          <h1 className="text-black text-4xl self-end">2</h1>
        </div>
      </section>
    </>
  );
};

export default About;
