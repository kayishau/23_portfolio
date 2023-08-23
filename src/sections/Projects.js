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
      className="w-full min-h-screen flex flex-col items-center justify-center border-t border-slate-500"
      style={{
        backgroundImage: "url(/img/finalTexture.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        height: "600px",
        width: "800px",
      }}>
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
