import { LinkArrow } from "../components/Icons";
import AnimatedText from "../components/AnimatedText";
import TransitionEffect from "../components/TransitionEffect";
import AnimatedTextWord from "../components/AnimatedTextWord";
import "../index.css";

const Home = ({ childern, className = "" }) => {
  return (
    <>
      <TransitionEffect />
      <section
      id="homeSection"
        className="flex flex-col items-center justify-center w-full min-h-screen border-b-1 border-slate-500"
      >
        <div className={`${className} w-full min-h-full`}>
          {childern}

          <div className="flex items-center w-full justify-center min-h-full border-4 border-red-600">
            <div className="w-1/2 flex items-center lg:w-2/5 justify-center border border-indigo-500"
              style={{
                backgroundImage: "url(/img/flowerFixed.png)",
                height: "100vh",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
              }}
              alt="watercolor flowers image"
            >
            </div>

            <div className="w-1/2 flex flex-col items-center self-center -ml-20">
              <AnimatedText
                text="Kayisha Ulysse"
                className="mb-6 font-cg font-bold tracking-wider"
              />
              <AnimatedTextWord text="SOFTWARE ENGINEER | DESIGNER | ENVIROMENTALIST | DIVERSITY ADVOCATE" />

              <p className="my-6 text-base font-cg font-medium">
              I'm an upbeat and creative Software Engineer who's absolutely smitten with everything related to design, the environment, and Web3! My brain is wired to think outside the box in the most creative ways possible. Taking abstract design and code concepts and transforming them into real-world solutions is not just a talent for me – it's a challenge that I am always excited to take on! 
              </p>
              <div className="flex items-center self-start mt-2">
                <a
                  href="/UlysseKayisha_Resume_23.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light font-cg p-2.5 px-6 text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark"
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </a>
                <a
                  href="mailto:ulyssekayisha@gmail.com"
                  target={"_blank"}
                  rel="noreferrer"
                  className="ml-4 text-lg text-dark font-cg font-extrabold underline"
                >
                  <span>Contact me 😊</span>
                </a>
              </div>
            </div>
            <div className="self-end pb-12">
          <h1 className="font-cg text-black text-2xl">1</h1>
        </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
