import AnimatedText from "../components/AnimatedText";
import TransitionEffect from "../components/TransitionEffect";
import AnimatedTextWord from "../components/AnimatedTextWord";
import { BsBoxArrowUpRight } from "react-icons/bs"
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
            <div className="flex mt-10 lg:mt-0 w-2/3 lg:w-1/2 h-[200px] tablet:h-[250px] md:h-[390px] lg:h-[490px] xl:h-[590px]"
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
                className="tablet:my-1 md:my-4 lg:my-5 font-cg font-bold tracking-wider"
              />
              <AnimatedTextWord text="SOFTWARE ENGINEER | DESIGNER | ENVIROMENTALIST | DIVERSITY ADVOCATE" />

              <p className="text-xs my-1 tablet:my-3 xl:my-7 text-center lg:text-left font-cg font-medium tablet:text-base lg:text-base xl:text-xl">
              I'm an upbeat and creative Software Engineer who's fascinated with everything and anything related to design, the environment, and Web3! My brain is wired to think outside the box in the most creative ways possible. Taking abstract design and code concepts and transforming them into real-world solutions is not just a talent for me – it's a challenge that I am always excited to take on! 
              </p>
              <div className="flex items-center lg:self-start mt-2">
                <a
                  href="https://drive.google.com/file/d/19AakJg4kJSXgR-UdL7G3PxcHhSYoPT84/view?usp=sharing"
                  // download="UlysseKayisha_Resume_23.pdf"
                  target={"_blank"}
                  rel="noreferrer"
                  className="flex items-center bg-dark text-light font-cg p-1.5 px-3 tablet:p-2.5 tablet:px-6 text-base tablet:text-lg font-semibold hover:bg-light hover:text-primary border border-solid border-transparent hover:border-dark delay-150"
                >Resume<BsBoxArrowUpRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="mailto:ulyssekayisha@gmail.com"
                  target={"_blank"}
                  rel="noreferrer"
                  className="ml-4 text-base tablet:text-lg mt-4 text-dark font-cg font-extrabold underline"
                >
                  <span>Contact me 😊</span>
                </a>
              </div>
            </div>
            {/* <div className="self-end md:pb-12 mr-5 xl:opacity-0">
          <h1 className="font-cg text-black text-sm tablet:text-lg md:text-xl lg:text-2xl">1</h1>
        </div> */}
          </div>
        
      </section>
    </>
  );
};

export default Home;
