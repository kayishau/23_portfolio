
// import AnimatedText from "@/components/AnimatedText"
// import { GithubIcon } from "@/components/Icons"
// import TransitionEffect from "@/components/TransitionEffect"


const Project = ({title, type, img, link, github}) => {

    return (
        <article className="w-full flex flex-col items-center justify-center border border-solid border-light bg-light p-6 relative shadow-2xl">

        <a href={link} target="_blank"
        className="w-full cursor-pointer overflow-hidden"
        >
            {/* <Image src={img} alt={title} className="w-full h-auto" /> */}
        </a>

        <div className="w-full flex flex-col items-start justify-between mt-4">
            <span className=" text-primary font-medium text-xl">{type}</span>
            <a href={link} target="_blank" className="hover:underline underline-offset-2">
            <h2 className="my-2 w-full text-left text-1xl font-semibold">{title}</h2>
            </a>

            <div className=" w-full mt-2 flex items-center justify-between underline">
            <a href={link} target="_blank" className="  font-semibold"> Visit</a>
            <a href={github} target="_blank" className="w-8"> 
            {/* <GithubIcon />{" "} */}
             </a>
          
            </div>
        </div>
        </article>
    )

}

const Projects = () => {

    return(
        <section id="projectsSection" className="flex items-center justify-center min-h-screen w-full">
            <h2> PROJECTS SECTION</h2>
        </section>
    )

}

export default Projects 
