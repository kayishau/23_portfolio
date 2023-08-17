import React, { useEffect } from "react";
import AOS from "aos";
// import "aos/dist/aos.css";
import EmblaCarousel from '../components/EmblaCarousel'
import { GithubIcon } from "../components/Icons";
import AnimatedText from "../components/AnimatedText";
import { projectsArray } from "../components/imageByIndex";


const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = projectsArray


export default function Projects() {
  useEffect(() => {
    // AOS.init();
  }, []);
  return (
    <>
    <section
      id="projectsSection"
      className="w-full h-screen mb-16 flex flex-col items-center justify-center border-4 border-black"
    >
    
        <AnimatedText className="font-cg" text="Creatively Coding" />

      <section className="sandbox__carousel">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
    </section>
    </>
    
  )

}
