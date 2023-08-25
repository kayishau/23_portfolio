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
    <>
      <section
        id="skillsSection"
        className="flex flex-col justify-center mx-auto items-center min-h-screen w-full border-t border-slate-500"
      >
        <div className="w-10/12 flex flex-col gap-3 xl:gap-10 mt-10">
          <h1 className="font-cg text-2xl lg:text-3xl xl:text-4xl text-center font-extrabold">
            Skills :)
          </h1>
          <p className="font-cg text-md xl:text-xl text-center">
            “Improve by 1% a day, and in just 70 days, you’re twice as good.”🌱 –
            Alan Weiss
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div
              className="flex flex-wrap w-2/3 md:w-1/3 justify-center items-center h-[200px] md:h-[300px] lg:h-[400px]" 
              style={{
                backgroundImage: "url(/img/front.png)",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="flex flex-row flex-wrap gap-3 lg:gap-5 justify-center w-4/5 items-center">
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <FaReact className="w-8 h-8 lg:w-11 lg:h-11" 
                  style={{
                    color: "#684C42"
                  }}/>
                </motion.div>
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <SiNextdotjs className="w-8 h-8 lg:w-11 lg:h-11"  
                  style={{
                    color: "#684C42"
                  }} />
                </motion.div>
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <FiFigma className="w-8 h-8 lg:w-11 lg:h-11" 
                  style={{
                    color: "#684C42"
                  }}/>
                </motion.div>
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <SiCanva className="w-8 h-8 lg:w-11 lg:h-11" 
                  style={{
                    color: "#684C42"
                  }} />
                </motion.div>
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <SiAdobe className="w-8 h-8 lg:w-11 lg:h-11"
                  style={{
                    color: "#684C42"
                  }} />
                </motion.div>
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <RiBootstrapLine className="w-8 h-8 lg:w-11 lg:h-11" 
                  style={{
                    color: "#684C42"
                  }}/>
                </motion.div>
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <SiTailwindcss className="w-8 h-8 lg:w-11 lg:h-11" 
                   style={{
                    color: "#684C42"
                  }}/>
                </motion.div>
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <TbBrandFramerMotion className="w-8 h-8 lg:w-11 lg:h-11" 
                  style={{
                    color: "#684C42"
                  }}/>
                </motion.div>
              </div>
            </div>

            <div
              className="flex flex-wrap w-2/3 md:w-1/3 justify-center items-center h-[200px] lg:h-[400px]"
              style={{
                backgroundImage: "url(/img/languages.png)",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="flex flex-row flex-wrap gap-3 lg:gap-5 justify-center w-4/5 items-center">
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <FaRust className="w-8 h-8 lg:w-11 lg:h-11" 
                  style={{
                    color: "#684C42"
                  }}/>
                </motion.div>
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <FaPython className="w-8 h-8 lg:w-11 lg:h-11" 
                   style={{
                    color: "#684C42"
                  }}/>
                </motion.div>
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <RiJavascriptLine className="w-8 h-8 lg:w-11 lg:h-11"
                  style={{
                    color: "#684C42"
                  }} />
                </motion.div>
              </div>
            </div>

            <div
              className="flex flex-wrap w-2/3 md:w-1/3 justify-center items-center h-[200px] lg:h-[400px]"
              style={{
                backgroundImage: "url(/img/back.png)",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="flex flex-row flex-wrap gap-3 lg:gap-5 justify-center w-4/5 items-center">
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <FaNodeJs className="w-8 h-8 lg:w-11 lg:h-11" 
                  style={{
                    color: "#684C42"
                  }}/>
                </motion.div>
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <BiLogoPostgresql className="w-8 h-8 lg:w-11 lg:h-11" 
                   style={{
                    color: "#684C42"
                  }} />
                </motion.div>
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <TbBrandDjango className="w-8 h-8 lg:w-11 lg:h-11" 
                  style={{
                    color: "#684C42"
                  }}/>
                </motion.div>
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <SiMongodb className="w-8 h-8 lg:w-11 lg:h-11" 
                   style={{
                    color: "#684C42"
                  }}/>
                </motion.div>
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <SiJest className="w-8 h-8 lg:w-11 lg:h-11"
                  style={{
                    color: "#684C42"
                  }} />
                </motion.div>
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <SiPostman className="w-8 h-8 lg:w-11 lg:h-11" 
                  style={{
                    color: "#684C42"
                  }}/>
                </motion.div>
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <SiTrello className="w-8 h-8 lg:w-11 lg:h-11"
                   style={{
                    color: "#684C42"
                  }} />
                </motion.div>
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <FaJira className="w-8 h-8 lg:w-11 lg:h-11" 
                  style={{
                    color: "#684C42"
                  }}/>
                </motion.div>

                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <SiExpress className="w-8 h-8 lg:w-11 lg:h-11"   
                  style={{
                    color: "#684C42"
                  }}/>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-end mr-8 mt-12">
          <h1 className="font-cg text-black text-2xl">3</h1>
        </div>
      </section>
    </>
  );
}

// FA6A01
