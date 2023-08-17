import React, { useEffect } from "react";
import AOS from "aos";
// import "aos/dist/aos.css";
import EmblaCarousel from '../components/EmblaCarousel'
import { GithubIcon } from "../components/Icons";
import AnimatedText from "../components/AnimatedText";



const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Project = ({ title, type, img, summary, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center border border-solid border-light bg-light p-6 relative shadow-2xl">
      <a
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden"
      >
        <img src={img} alt={title} className="w-full h-auto" />
      </a>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className=" text-primary font-medium text-xl">{type}</span>
        <a
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-1xl font-semibold">
            {title}
          </h2>
          <p>{summary}</p>
        </a>

        <div className=" w-full mt-2 flex items-center justify-between underline">
          <a href={link} target="_blank" className="font-semibold">
            {" "}
            Visit
          </a>
          <a href={github} target="_blank" className="w-8">
            <GithubIcon />{" "}
          </a>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  useEffect(() => {
    // AOS.init();
  }, []);
  return (
    <>
    <section
      id="projectsSection"
      className="w-full mb-16 flex flex-col items-center justify-center border-4 border-black"
    >
      {/* <div className="pt-10"> */}
    
        <AnimatedText className="font-cg" text="Creatively Coding" />
{/* 
        <div className="py-8 mx-16 gap-10 flex items-center justify-center">
          <div
            className="border-black w-1/3"
            // data-aos="fade-up"
            // data-aos-anchor-placement="top-bottom"
            // data-aos-delay="300"
          >
            <Project
              title="Carbon FootPrint Tracker"
              img={"/img/projects/image-coming-soon.jpeg"}
              summary="A mini full CRUD wiki application that provides overviews on some of Web3 biggest topics. Created with NextJS, Tailwind CSS, Framer-Motion, MongoDB Atlas and NodeJS"
              link="https://github.com/tiffanysimione/ProjectThree-CarbonFootprint-FrontEnd"
              type="Featured Project"
              github="https://github.com/tiffanysimione/ProjectThree-CarbonFootprint-FrontEnd"
            />
          </div>
          <div
            className="border-black w-1/3"
            // data-aos="fade-up"
            // data-aos-anchor-placement="top-bottom"
            // data-aos-delay="150"
          >
            <Project
              title="Web3 Wiki"
              img={"/img/projects/image-coming-soon.jpeg"}
              summary="A mini full CRUD wiki application that provides overviews on some of Web3 biggest topics. Created with NextJS, Tailwind CSS, Framer-Motion, MongoDB Atlas and NodeJS"
              link="https://github.com/kayishau/web3-wiki"
              type="Featured Project"
              github="https://github.com/kayishau/web3-wiki"
            />
          </div>
          <div
            className="border-black w-1/3"
            // data-aos="fade-up"
            // data-aos-anchor-placement="top-bottom"
            // data-aos-delay="250"
          >
            <Project
              title="Web3 Wiki"
              img={"/img/projects/image-coming-soon.jpeg"}
              summary="A mini full CRUD wiki application that provides overviews on some of Web3 biggest topics. Created with NextJS, Tailwind CSS, Framer-Motion, MongoDB Atlas and NodeJS"
              link="https://github.com/kayishau/web3-wiki"
              type="Featured Project"
              github="https://github.com/kayishau/web3-wiki"
            />
          </div>
        </div>
      </div> */}
      <section className="sandbox__carousel">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
    </section>
    </>
    
  )

}
