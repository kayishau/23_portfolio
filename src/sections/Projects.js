import React from "react";
import EmblaCarousel from '../components/EmblaCarousel';
import { projectsArray } from "../components/imageByIndex";
import "../index.css";


const OPTIONS = { loop: true }
// const SLIDE_COUNT = 5
const SLIDES = projectsArray


export default function Projects() {
  return (
    <>
    <section
      id="projectsSection"
      className="w-full min-h-screen flex flex-col items-center justify-center border-t border-slate-500">
        <h1 className="font-cg text-4xl font-extrabold mt-10">Creatively Coding :)</h1>
      <section className="sandbox__carousel">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
    <div className="self-end pb-16 mr-8">
          <h1 className="font-cg text-black text-2xl">4</h1>
        </div>
    </section>
    </>
    
  )

}
