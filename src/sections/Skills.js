import { FaReact, FaNodeJs, FaRust, FaPython, FaJira } from "react-icons/fa";
import {
  SiNextdotjs,
  SiCanva,
  SiAdobe,
  SiMongodb,
  SiTailwindcss,
  SiJest,
  SiPostman,
  SiTrello,
  SiExpress,
} from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { RiJavascriptLine, RiBootstrapLine } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandDjango, TbBrandFramerMotion } from "react-icons/tb";
import "../index.css"
import { motion } from "framer-motion";

export default function Skills() {
  return (
    
      <section
        id="skillsSection"
        className="flex flex-col justify-center mx-auto items-center min-h-screen w-full border-t border-slate-500"
      >
        <div className="w-10/12 flex flex-col gap-2 lg:gap-3 xl:gap-10 mt-10 lg:mt-16">
          <h1 className="font-cg text-2xl lg:text-3xl xl:text-4xl text-center font-extrabold">
            Skills :)
          </h1>
          <p className="text-md lg:text-lg xl:text-xl italic font-bold uppercase text-dark/75 font-cg tablet:my-3  text-center">
            “Improve by 1% a day, and in just 70 days, you’re twice as good.”🌱 –
            <span className="text-primary/75 ml-1">Alan Weiss</span>
          </p>


          <div className="flex flex-col tablet:flex-row items-center justify-center">
            <div
              className="flex flex-wrap w-2/3 tablet:w-1/3 justify-center items-center h-[150px] md:h-[300px] xl:h-[350px]" 
              style={{
                backgroundImage: "url(/img/front.png)",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="flex flex-row flex-wrap gap-3 lg:gap-5 justify-center w-2/3 md:w-4/5 items-center lg:mt-5 xl:w-[350px]">
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <FaReact className="w-6 h-6 lg:w-11 lg:h-11" 
                  style={{
                    color: "#684C42"
                  }}
                  // data-te-toggle="tooltip"
                  // title="ReactJS"
                  />
                </motion.div>
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <SiNextdotjs className="w-6 h-6 lg:w-11 lg:h-11"  
                  style={{
                    color: "#684C42"
                  }} />
                </motion.div>
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <FiFigma className="w-6 h-6 lg:w-11 lg:h-11" 
                  style={{
                    color: "#684C42"
                  }}/>
                </motion.div>
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <SiCanva className="w-6 h-6 lg:w-11 lg:h-11" 
                  style={{
                    color: "#684C42"
                  }} />
                </motion.div>
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <SiAdobe className="w-6 h-6 lg:w-11 lg:h-11"
                  style={{
                    color: "#684C42"
                  }} />
                </motion.div>
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <RiBootstrapLine className="w-6 h-6 lg:w-11 lg:h-11" 
                  style={{
                    color: "#684C42"
                  }}/>
                </motion.div>
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <SiTailwindcss className="w-6 h-6 lg:w-11 lg:h-11" 
                   style={{
                    color: "#684C42"
                  }}/>
                </motion.div>
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <TbBrandFramerMotion className="w-6 h-6 lg:w-11 lg:h-11" 
                  style={{
                    color: "#684C42"
                  }}/>
                </motion.div>
              </div>
            </div>

            <div
              className="flex flex-wrap w-2/3 tablet:w-1/3 justify-center items-center h-[150px] md:h-[300px] xl:h-[350px]"
              style={{
                backgroundImage: "url(/img/languages.png)",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="flex flex-row flex-wrap gap-3 lg:gap-5 justify-center w-2/3 md:w-4/5  items-center xl:w-[350px]">
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <FaRust className="w-6 h-6 lg:w-11 lg:h-11" 
                  style={{
                    color: "#684C42"
                  }}/>
                </motion.div>
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <FaPython className="w-6 h-6 lg:w-11 lg:h-11" 
                   style={{
                    color: "#684C42"
                  }}/>
                </motion.div>
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <RiJavascriptLine className="w-6 h-6 lg:w-11 lg:h-11"
                  style={{
                    color: "#684C42"
                  }} />
                </motion.div>
              </div>
            </div>

            <div
              className="flex flex-wrap w-2/3 tablet:w-1/3 justify-center items-center h-[150px] md:h-[300px] xl:h-[350px]"
              style={{
                backgroundImage: "url(/img/back.png)",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="flex flex-row flex-wrap gap-3 mt-3 md:mt-0 lg:gap-5 justify-center w-2/3 md:w-4/5 items-center lg:mt-5 xl:w-[350px]">
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <FaNodeJs className="w-6 h-6 lg:w-11 lg:h-11" 
                  style={{
                    color: "#684C42"
                  }}/>
                </motion.div>
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <BiLogoPostgresql className="w-6 h-6 lg:w-11 lg:h-11" 
                   style={{
                    color: "#684C42"
                  }} />
                </motion.div>
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <TbBrandDjango className="w-6 h-6 lg:w-11 lg:h-11" 
                  style={{
                    color: "#684C42"
                  }}/>
                </motion.div>
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <SiMongodb className="w-6 h-6 lg:w-11 lg:h-11" 
                   style={{
                    color: "#684C42"
                  }}/>
                </motion.div>
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <SiJest className="w-6 h-6 lg:w-11 lg:h-11"
                  style={{
                    color: "#684C42"
                  }} />
                </motion.div>
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <SiPostman className="w-6 h-6 lg:w-11 lg:h-11" 
                  style={{
                    color: "#684C42"
                  }}/>
                </motion.div>
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <SiTrello className="w-6 h-6 lg:w-11 lg:h-11"
                   style={{
                    color: "#684C42"
                  }} />
                </motion.div>
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <FaJira className="w-6 h-6 lg:w-11 lg:h-11" 
                  style={{
                    color: "#684C42"
                  }}/>
                </motion.div>

                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <SiExpress className="w-6 h-6 lg:w-11 lg:h-11"   
                  style={{
                    color: "#684C42"
                  }}/>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-end  xl:mb-11 xl:opacity-0 h-[200px] w-full">
        <h1 className="font-cg pr-5 text-black text-sm tablet:text-lg md:text-xl lg:text-2xl">3</h1>
        </div>
      </section>
  
  );
}
