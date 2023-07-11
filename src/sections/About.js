import React from "react";
import { Barbell } from "../components/Icons";
import AnimatedText from "../components/AnimatedText";

const About = () => {
  return (
    <>
      <section
        id="aboutSection"
        className="flex items-center justify-center min-h-screen w-full"
      >
        <div className="flex w-1/2 mx-4 min-h-screen items-center justify-center">
          {/* <div className="h-20 w-20">
                <Barbell className={"w-10 h-10"}/>
                </div> */}
          <div id="picture-stack" className="flex flex-col">
            <div
              style={{
                backgroundImage: "url(/img/KU1.png)",
                height: "300px",
                width: "200px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              alt="Kayisha/designer"
            ></div>
            {/* <div 
                    style={{
                        backgroundImage: "url(/img/Kayisha-profile-pic.png)",
                        height: "300px",
                        width: "200px",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }}
                      alt="Kayisha/travel"
                      ></div> */}
            <div
              style={{
                backgroundImage: "url(/img/KU3.png)",
                height: "300px",
                width: "200px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              alt="Kayisha/nature"
            ></div>
          </div>
          <div
            className=""
            style={{
              backgroundImage: "url(/img/KU2.png)",
              height: "450px",
              width: "380px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            alt="Kayisha/main"
          ></div>
        </div>
        <div className="w-1/2 flex flex-col -ml-10 justify-center items-center border border-black">
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
