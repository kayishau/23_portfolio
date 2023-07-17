// import AnimatedText from "@/components/AnimatedText"
// import { GithubIcon } from "@/components/Icons"
// import TransitionEffect from "@/components/TransitionEffect"


import AnimatedText from "../components/AnimatedText";

const Project = ({ title, type, img, summary, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center border border-solid border-light bg-light p-6 relative shadow-2xl">
      <a
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden"
      >
        {/* <Image src={img} alt={title} className="w-full h-auto" /> */}
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
          <a href={link} target="_blank" className="  font-semibold">
            {" "}
            Visit
          </a>
          <a href={github} target="_blank" className="w-8">
            {/* <GithubIcon />{" "} */}
          </a>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <section
      id="projectsSection"
      className="w-full mb-16 flex flex-col items-center justify-center border border-black"
    >
       
       <div className="pt-10">
        <AnimatedText text="Creatively Coding" />

        <div className="pt-20 flex flex-wrap items-center justify-center">
            <div className="border-black w-1/2">
                <Project
                title="Carbon FootPrint Tracker"
                img={"url(/img/KU1.png)"}
                summary="A mini full CRUD wiki application that provides overviews on some of Web3 biggest topics. Created with NextJS, Tailwind CSS, Framer-Motion, MongoDB Atlas and NodeJS"
                link="https://github.com/tiffanysimione/ProjectThree-CarbonFootprint-FrontEnd"
                type="Featured Project"
                github="https://github.com/tiffanysimione/ProjectThree-CarbonFootprint-FrontEnd" />

            </div>

        </div>

        <div>

        </div>
        </div> 
     
    </section>
  );
};

export default Projects;
