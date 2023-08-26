import React from "react";
import EmblaCarousel from "../components/EmblaCarousel";
import { projectsArray } from "../components/imageByIndex";
import "../index.css";
import { RiArrowRightDoubleLine, RiArrowLeftDoubleFill } from "react-icons/ri";

const OPTIONS = { loop: true };
// const SLIDE_COUNT = 5
const SLIDES = projectsArray;

export default function Projects() {
  return (
    <>
      <section
        id="projectsSection"
        className="w-full min-h-screen flex flex-col justify-center border-t border-slate-500"
      >
        <div className="flex justify-center items-center gap-5 mb-2 tablet:mb-4 lg:mb-0 lg:mt-8">
         <div>
         <RiArrowLeftDoubleFill className="w-5 h-5 lg:w-8 lg:h-8"/>
          </div> 
          <div>
          <h1 className="font-cg text-2xl lg:text-3xl xl:text-4xl text-center font-extrabold">Swipe :)</h1>
          </div>
        <div>
         <RiArrowRightDoubleLine className="w-5 h-5 lg:w-8 lg:h-8"/>
          </div> 
        </div>
        <section className="justify-center flex flex-col md:my-5">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          <div className="self-end mr-5">
            <h1 className="font-cg text-black text-sm tablet:text-lg md:text-xl lg:text-2xl">
              4
            </h1>
          </div>
        </section>
      </section>
    </>
  );
}
