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
import { motion } from "framer-motion";

export default function Skills() {
  // useEffect(() => {
  //     AOS.init();
  //   }, []);
  return (
    <>
      <section
        id="skillsSection"
        className="flex flex-wrap flex-col items-center justify-center min-h-screen w-full border-t border-slate-500"
        style={{
          backgroundImage: "url(/img/finalTexture.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
        }}
      >
        <div className="w-10/12 flex flex-col">
          <h1 className="font-cg text-4xl text-center font-extrabold mt-10">
            Skills :)
          </h1>
          <p className="font-cg text-xl text-center">
            “Improve by 1% a day, and in just 70 days, you’re twice as good.” –
            Alan Weiss
          </p>
          <div className="flex">
            <div
              className="flex flex-wrap w-1/3 justify-center items-center"
              style={{
                backgroundImage: "url(/img/front.png)",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                height: "500px",
                backgroundPosition: "center",
              }}
            >
              <div className="flex flex-wrap gap-5 justify-center px-5">
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <FaReact className="w-11 h-11" />
                </motion.div>
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <SiNextdotjs className="w-11 h-11" />
                </motion.div>
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <FiFigma className="w-11 h-11" />
                </motion.div>
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <SiCanva className="w-11 h-11" />
                </motion.div>
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <SiAdobe className="w-11 h-11" />
                </motion.div>
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <RiBootstrapLine className="w-11 h-11" />
                </motion.div>
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <SiTailwindcss className="w-11 h-11" />
                </motion.div>
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <TbBrandFramerMotion className="w-11 h-11" />
                </motion.div>
              </div>
            </div>

            <div
              className="flex flex-wrap w-1/3 justify-center items-center"
              style={{
                backgroundImage: "url(/img/languages.png)",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                height: "500px",
                backgroundPosition: "center",
              }}
            >
              <div className="flex flex-wrap gap-5 justify-center">
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <FaRust className="w-11 h-11" />
                </motion.div>
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <FaPython className="w-11 h-11" />
                </motion.div>
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <RiJavascriptLine className="w-11 h-11" />
                </motion.div>
              </div>
            </div>

            <div
              className="flex flex-wrap w-1/3 justify-center items-center"
              style={{
                backgroundImage: "url(/img/back.png)",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                height: "500px",
                backgroundPosition: "center",
              }}
            >
              <div className="flex flex-wrap gap-5 justify-center px-5">
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <FaNodeJs className="w-11 h-11" />
                </motion.div>
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <BiLogoPostgresql className="w-11 h-11" />
                </motion.div>
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <TbBrandDjango className="w-11 h-11" />
                </motion.div>
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <SiMongodb className="w-11 h-11" />
                </motion.div>
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <SiJest className="w-11 h-11" />
                </motion.div>
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <SiPostman className="w-11 h-11" />
                </motion.div>
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <SiTrello className="w-11 h-11" />
                </motion.div>
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <FaJira className="w-11 h-11" />
                </motion.div>

                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <SiExpress className="w-11 h-11" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <div className=" font-cg self-end mb-10 mr-6">
          <h1 className="text-black text-4xl self-end">3</h1>
        </div>
      </section>
    </>
  );
}
