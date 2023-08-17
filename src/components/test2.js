import React from "react";
import comingSoonImage from "../../src/imgs/testimage.JPG";
import { GithubIcon } from "./Icons";

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

// export default Test2;

// TODO: find out how to export multiple projects from one page to pass to ImageByIndex 

export function Project1() {
    return(
        <>
       <Project
        title="Carbon FootPrint Tracker"
        img={"/img/projects/image-coming-soon.jpeg"}
        summary="A mini full CRUD wiki application that provides overviews on some of Web3 biggest topics. Created with NextJS, Tailwind CSS, Framer-Motion, MongoDB Atlas and NodeJS"
        link="https://github.com/tiffanysimione/ProjectThree-CarbonFootprint-FrontEnd"
        type="Featured Project"
        github="https://github.com/tiffanysimione/ProjectThree-CarbonFootprint-FrontEnd"
        />
        </>
    )
}

export function Project2() {
    return(
        <>
       <Project
        title="Carbon FootPrint Tracker"
        img={"/img/projects/image-coming-soon.jpeg"}
        summary="A mini full CRUD wiki application that provides overviews on some of Web3 biggest topics. Created with NextJS, Tailwind CSS, Framer-Motion, MongoDB Atlas and NodeJS"
        link="https://github.com/tiffanysimione/ProjectThree-CarbonFootprint-FrontEnd"
        type="Featured Project"
        github="https://github.com/tiffanysimione/ProjectThree-CarbonFootprint-FrontEnd"
        />
        </>
    )
}

export function Project3() {
    return(
        <>
       <Project
        title="Carbon FootPrint Tracker"
        img={"/img/projects/image-coming-soon.jpeg"}
        summary="A mini full CRUD wiki application that provides overviews on some of Web3 biggest topics. Created with NextJS, Tailwind CSS, Framer-Motion, MongoDB Atlas and NodeJS"
        link="https://github.com/tiffanysimione/ProjectThree-CarbonFootprint-FrontEnd"
        type="Featured Project"
        github="https://github.com/tiffanysimione/ProjectThree-CarbonFootprint-FrontEnd"
        />
        </>
    )
}
export function Project4() {
    return(
        <>
       <Project
        title="Carbon FootPrint Tracker"
        img={"/img/projects/image-coming-soon.jpeg"}
        summary="A mini full CRUD wiki application that provides overviews on some of Web3 biggest topics. Created with NextJS, Tailwind CSS, Framer-Motion, MongoDB Atlas and NodeJS"
        link="https://github.com/tiffanysimione/ProjectThree-CarbonFootprint-FrontEnd"
        type="Featured Project"
        github="https://github.com/tiffanysimione/ProjectThree-CarbonFootprint-FrontEnd"
        />
        </>
    )
}
