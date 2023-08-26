import React from "react";
import AboutPictures from "../components/AboutAOS";
import "../index.css"

const About = () => {
  return (
    <>
      <section
        id="aboutSection"
        className="flex flex-col lg:flex-row items-center justify-center md:min-h-screen w-full border-t border-slate-500" 
      >
        <div className="w-full lg:w-1/2 lg:my-5 items-center justify-center">
          <AboutPictures />
        </div>
        <div className="w-full px-4 lg:px-0 lg:mr-10 lg:w-1/2 flex flex-col justify-center items-center">
          <div>
            <h1 className="font-cg text-2xl lg:text-3xl xl:text-4xl font-extrabold md:mb-4">The Tea On Me :)</h1>
          </div>
          <h2 className="text-md xl:text-xl font-cg italic font-bold uppercase text-center text-dark/75">
           An introverted extrovert with too many passions to count 
          </h2>
          <p className="text-xs tablet:text-sm xl:text-base my-2 xl:my-4 md:pr-8 font-cg text-center lg:text-left">
           Hi I'm Kayisha (kai-yee-sha) a <span>New York native </span>born and raised with family origins hailing from the Caribbean.🌴 I speak 2 languages fluently and 2 intermediatley. Family and purpose are my main source of drive, and I am always down to throw my unique perspective on any topic or project. 
          </p>
          <p className="text-xs tablet:text-sm xl:text-base my-2 xl:my-4 md:pr-8 font-cg text-center lg:text-left">
          Though my B.S. is in Interior Design, I've always had an affinity for Tech, dating back to when I first joined my highschool robotics team and competed on a national stage. Later in life, after a joining a <span><a href="https://twitter.com/litter_token?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target={"_blank"} rel="noreferrer" className="underline">Web3 project based off of my love for the enviroment</a>, I was introduced to the world of blockchain, ReFi, tokenomics, crypto, smart contracts, ZK etc. which reignited my desire to become an engineer.</span> After completing an Immersive bootcamp and learning the basics, I took it upon myself to keep building and I'm excited to keep growing and see where this journey leads me.
          </p>

          <p className="text-xs tablet:text-sm xl:text-base my-2 xl:my-4 md:pr-8 font-cg text-center lg:text-left">
            When I'm not hacking away, you'll usually find me hiking, reading, playing sports (volleyball or football are my go-tos), playing my sax, attemptinig to learn a new language, hitting up bachata or salsa classes or curating the freshest of playlist. My go to song for an energy boost is 'La Santa' by Bad Bunny and my tops genres are Afrobeats, Reggaeton and RnB. In a crowded room, I am defineltey the one who iniaties the dancing. 
          </p>
        
        </div>
        <div className="self-end md:pb-12 mr-5">
          <h1 className="font-cg text-black text-sm tablet:text-lg md:text-xl lg:text-2xl">2</h1>
        </div>
      </section>
    </>
  );
};

export default About;
