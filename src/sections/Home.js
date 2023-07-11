import React,{ useEffect } from "react";
import { LinkArrow } from "../components/Icons";
import AnimatedText from "../components/AnimatedText";
import TransitionEffect from "../components/TransitionEffect";
import AnimatedTextWord from "../components/AnimatedTextWord";



const Home = ({ childern, className = "" }) => {
  return (
    <>
      <TransitionEffect />
      <section
        id="homeSection"
        className="flex items-center justify-center w-full min-h-screen"
      >
        <div
         className={`${className}`}>
          {childern}

          <div className="flex items-center w-full">
            <div className="w-1/2 flex items-center justify-center mr-3">
              <div
                style={{
                  backgroundImage: "url(/img/flower.png)",
                  height: "800px",
                  width: "800px",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                alt="watercolor flowers image"
                className="mt-4 mb-4"
              ></div>
            </div>

            <div className="w-1/2 flex flex-col items-center self-center -ml-20">
              <AnimatedText text="Kayisha Ulysse" className="mb-6" />
              <AnimatedTextWord text="SOFTWARE ENGINEER | DESIGNER | ENVIROMENTALIST | DIVERSITY ADVOCATE" 
              style={{
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' 
              }}/>

              <p className="my-6 text-base font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="flex items-center self-start mt-2">
                <a
                  href="/UlysseKayisha_Resume_23.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark"
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </a>
                <a
                  href="mailto:ulyssekayisha@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline"
                >
                  <span>Contact Me 😊</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
