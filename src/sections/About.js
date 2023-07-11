import React, { Component } from "react";
// import { Barbell } from "../components/Icons";
import AnimatedText from "../components/AnimatedText";
import AboutPictures from "../components/AOSAnimation";
import Fadein from "../components/AOSAnimation";


const About = () => {
    
    
  return (
    <>
      <section
        id="aboutSection"
        className="flex items-center justify-center min-h-screen w-full"
      >
        <div className="w-1/2 min-h-screen">
         {/* Add Picture fade in component here */}
         <AboutPictures />
        </div>
        <div className="w-1/2 flex flex-col -ml-10 justify-center items-center">
            {/* add margins so that Animated text overlaos */}
          <div>
            <AnimatedText text="Placeholder slogan!" className="my-6" />
          </div>
          <h2 className="text-lg font-bold uppercase text-dark/75">
            About Me
          </h2>
          <p className="my-4 pr-8 font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <p className="font-medium pr-8">
          
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation.
          </p>

          <p className="font-medium pr-8">
            
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
      </section>
    </>
  );
};

export default About;
