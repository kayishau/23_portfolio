import React from "react";
import EmblaCarousel from "../components/EmblaCarousel";
import { projectsArray } from "../components/imageByIndex";
import "../index.css";

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
        {/* <h1 className="font-cg text-4xl font-extrabold mt-10">Creatively Coding :)</h1> */}
        <section className="justify-center flex flex-col my-5">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          <div className="self-end md:pb-12 bg-blue-500 mr-5">
            <h1 className="font-cg text-black text-sm tablet:text-lg md:text-xl lg:text-2xl">
              1
            </h1>
          </div>
        </section>
      </section>
    </>
  );
}
