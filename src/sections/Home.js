import { LinkArrow } from "../components/Icons";
import AnimatedText from "../components/AnimatedText";
import TransitionEffect from "../components/TransitionEffect";
import AnimatedTextWord from "../components/AnimatedTextWord";
import "../index.css";

const Home = () => {
  return (
    <>
      <TransitionEffect />
      <section
      id="homeSection"
        className="flex items-center justify-center w-full min-h-screen border-b-1 border-slate-500"
      >
          <div className="flex flex-col lg:flex-row items-center w-full justify-center min-h-full">
            <div className="flex w-2/3 lg:w-2/5 h-[300px] md:h-[500px] lg:h-[600px] xl:h-[750px] "
              style={{
                backgroundImage: "url(/img/flowerFixed.png)",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              alt="watercolor flowers image powered by midjourney"
            >
            </div>

            <div className="w-full lg:w-1/2 px-6 lg:px-2 flex flex-col items-center justify-center">
              <AnimatedText
                text="Kayisha Ulysse"
                className="my-4 lg:my-5 font-cg font-bold tracking-wider"
              />
              <AnimatedTextWord text="SOFTWARE ENGINEER | DESIGNER | ENVIROMENTALIST | DIVERSITY ADVOCATE" />

              <p className="my-3 lg:my-5 xl:my-7 text-base text-center lg:text-left font-cg font-medium lg:text-lg xl:text-xl">
              I'm an upbeat and creative Software Engineer who's absolutely gassed with everything and anything related to design, the environment, and Web3! My brain is wired to think outside the box in the most creative ways possible. Taking abstract design and code concepts and transforming them into real-world solutions is not just a talent for me – it's a challenge that I am always excited to take on! 
              </p>
              <div className="flex items-center lg:self-start mt-2">
                <a
                  href="https://docs.google.com/document/d/1rZi9xU_hVfBiaTgdPBseuPRhPdYhjP4y4fhEpJrGEoQ/edit?usp=sharing"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light font-cg p-2.5 px-6 text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark"
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </a>
                <a
                  href="mailto:ulyssekayisha@gmail.com"
                  target={"_blank"}
                  rel="noreferrer"
                  className="ml-4 text-lg mt-7 text-dark font-cg font-extrabold underline"
                >
                  <span>Contact me 😊</span>
                </a>
              </div>
            </div>
            <div className="self-end pb-12">
          <h1 className="font-cg text-black text-2xl">1</h1>
        </div>
          </div>
        
      </section>
    </>
  );
};

export default Home;
