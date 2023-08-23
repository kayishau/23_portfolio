import React, { Component } from "react";
import AnimatedText from "../components/AnimatedText";
import AboutPictures from "../components/AboutAOS";
import Fadein from "../components/AboutAOS";

const About = () => {
  return (
    <>
      <section
        id="aboutSection"
        className="flex flex-wrap items-center justify-center min-h-screen w-full border-t border-slate-500" 
        style={{
          backgroundImage: "url(/img/finalTexture.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
        }}
      >
        <div className="w-1/2 min-h-screen">
          {/* Add Picture fade in component here */}
          <AboutPictures />
        </div>
        <div className="w-1/2 min-h-screen flex flex-col -ml-10 justify-center items-center ">
          {/* add margins so that Animated text overlaos */}
          <div className="mb-">
            <h1 className="font-cg text-4xl font-extrabold mb-4">The Tea On Me :)</h1>
          </div>
          <h2 className="text-lg font-cg italic font-bold uppercase text-dark/75">
           An introverted extrovert with too many passions to count 
          </h2>
          <p className="my-4 pr-8  font-cg">
           Hi I'm Kayisha (kai-yee-sha) a <span>New York native </span>born and raised with family origins hailing from the Caribbean.🌴 I speak 2 languages fluently and 2 intermediatley. Family and purpose are my main source of drive, and I am always down to throw my unique perspective on any topic or project. 
          </p>
          <p className="mb-4 font-medium pr-8 font-cg">
          Though my B.S. is in Interior Design, I've always had an affinity for Tech, dating back to when I first joined my highschool robotics team and competed on a national stage. Later in life, after a joining a <span><a href="https://twitter.com/litter_token?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target={"_blank"} className="underline">Web3 project based off of my love for the enviroment</a>, I was introduced to the world of blockchain, ReFi, tokenomics, crypto, smart contracts, ZK etc. which reignited my desire to become an engineer.</span> After completing an Immersive bootcamp and learning the basics, I took it upon myself to keep building and I'm excited to keep growing and see where this journey leads me.
          </p>

          <p className="font-medium pr-8 font-cg">
            When I'm not hacking away, you'll usually find me hiking, reading, playing sports (volleyball or football are my go-tos), playing my sax, attemptinig to learn a new language, hitting up bachata or salsa classes or curating the freshest of playlist. My go to song for an energy boost is 'La Santa' by Bad Bunny and my tops genres are Afrobeats, Reggaeton and RnB. In a crowded room, I am defineltey the one who iniaties the dancing. 
          </p>
        
        </div>
        <div className="self-end pb-16 -ml-8 ">
          <h1 className="font-cg  text-black text-2xl">2</h1>
        </div>
      </section>
    </>
  );
};

export default About;
