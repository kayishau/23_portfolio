import { LinkArrow } from "../components/Icons";
import AnimatedText from "../components/AnimatedText";
import TransitionEffect from "../components/TransitionEffect";
import AnimatedTextWord from "../components/AnimatedTextWord";

const Home = ({ childern, className = "" }) => {
  return (
    <>
      <TransitionEffect />
      <section
        id="homeSection"
        style={{
          backgroundImage: "url(/img/finalTexture.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          // marginBottom: "5px"
        }}
        className="flex flex-col items-center justify-center w-full min-h-screen border border-slate-500"
      >
        <div className={`${className} w-full min-h-full`}>
          {childern}

          <div className="flex items-center w-full">
            <div className="w-1/2 flex items-center justify-center mr-3">
              <div
                style={{
                  backgroundImage: "url(/img/flower.png)",
                  height: "800px",
                  width: "800px",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                alt="watercolor flowers image"
                className="mt-4 mb-4"
              ></div>
            </div>

            <div className="w-1/2 flex flex-col items-center self-center -ml-20">
              <AnimatedText
                text="Kayisha Ulysse"
                className="mb-6 font-cg font-bold tracking-wider"
              />
              <AnimatedTextWord text="SOFTWARE ENGINEER | DESIGNER | ENVIROMENTALIST | DIVERSITY ADVOCATE" />

              <p className="my-6 text-base font-cg font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                  className="ml-4 text-lg text-dark font-cg font-extrabold underline"
                >
                  <span>Contact me 😊</span>
                </a>
              </div>
            </div>
            <div className=" font-cg self-end mb-20 ml-5">
              <h1 className="text-black text-4xl self-end">1</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
