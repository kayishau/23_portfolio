import React from "react";
import { LinkArrow } from "../components/Icons";
import AnimatedText from "../components/AnimatedText";

const Home = ({ childern, className = "" }) => {
  return (
    <section
      id="homeSection"
      className="flex items-center justify-center w-full min-h-screen"
    >
      <div className={`${className}`}>
        {childern}

        <div className="flex items-center justify-between w-full border border-lime-600">
          <div className="w-1/2 border border-black flex items-center justify-center">
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

          <div className="w-1/2 flex flex-col items-center self-center border border-black px-10">
            <AnimatedText text="Kayisha Ulysse" />
            <p className="my-4 text-base font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
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
               <span>Contact Me :)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;


// <div class="SE">

// <div class="slider-wrapper">

//     <div class="slider">
//         <div class="slider-text1">FRONTEND SOFTWARE ENGINEER</div>
//         <div class="slider-text2">DESIGNER</div>
//         <div class="slider-text3">ENVIROMENTALIST</div>
//     </div>

// </div>

// </div>

// .SE {
//     align-self: center;
//     font-size: 20px;
//     margin-bottom: 30px;
//     color: var(--primary)
// }

// .slider {
//     height: 50px;
//     padding-left: 15px;
//     overflow: hidden;
// }

// .slider-text1 {
//     animation: slide 5s linear infinite;
// }
// .slider-text2 {
//     /* animation: slide 3s linear infinite; */
// }

// .slider-text3 {
//     /* animation: slide 3s linear infinite; */
// }


// @keyframes slide {
//     0% {margin-top: -300px;}
//     5% {margin-top: -200px;}
//     33% {margin-top: -200px;}
//     38% {margin-top: -100px;}
//     66% {margin-top: -100px;}
//     71% {margin-top: 0px;}
//     100% {margin-top: 0px;}
// }

// .slider div {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     color: --primary;
//     height: 50px;
//     margin-bottom: 50px;
//     padding: 2px 15px;
//     text-align: center;
//     box-sizing: border-box;
//   }
