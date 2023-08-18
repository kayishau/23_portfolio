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
      className="w-full min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url(/img/finalTexture.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}>
        <h1 className="font-cg text-4xl font-extrabold mt-0">Creatively Coding </h1>
      <section className="sandbox__carousel">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
       <div className=" font-cg self-end mr-6">
              <h1 className="text-black text-4xl self-end">4</h1>
            </div>
    </section>
    </>
    
  )

}
