import { FaReact, FaNodeJs, FaRust, FaPython, FaJira } from 'react-icons/fa'
import { SiNextdotjs, SiCanva, SiAdobe, SiMongodb, SiTailwindcss, SiJest, SiPostman, SiTrello, SiExpress } from 'react-icons/si'
import { FiFigma } from 'react-icons/fi'
import { RiJavascriptLine, RiBootstrapLine } from 'react-icons/ri'
import { BiLogoPostgresql } from 'react-icons/bi'
import { TbBrandDjango, TbBrandFramerMotion } from 'react-icons/tb'



import { motion, Variants } from "framer-motion";

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
        <div className="w-10/12 h-screen gap-10 flex flex-col justify-center border border-green-700"
        >
        <h1 className="font-cg text-4xl text-center border border-black font-extrabold mt-10">Skills :)</h1>
        <div className="flex text-center justify-around border border-black">

          <div className="w-1/3"
           style={{
            backgroundImage: "url(/img/front.png)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            height: "500px"
          }}
          >
          <div className='flex flex-wrap justify-center gap-5 border border-green-700 px-5'>
          <FaReact className='w-11 h-11'/>
          <SiNextdotjs className='w-11 h-11'/>
          <FiFigma className='w-11 h-11'/>
          <SiCanva className='w-11 h-11'/>
          <SiAdobe className='w-11 h-11'/>
          <RiBootstrapLine className='w-11 h-11'/>
          <SiTailwindcss className='w-11 h-11'/>
          <TbBrandFramerMotion className='w-11 h-11'/>
          </div>
          </div>

          <div className="w-1/3"
              style={{
                backgroundImage: "url(/img/languages.png)",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                height: "500px"
              }}
          >
          <div className='flex flex-wrap justify-center gap-5 border border-green-700 px-5'>
            <FaRust className='w-11 h-11'/>
            <FaPython className='w-11 h-11'/>
            <RiJavascriptLine className='w-11 h-11'/>
          </div>
          </div>

          <div className="w-1/3"
              style={{
                backgroundImage: "url(/img/back.png)",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                height: "500px"
              }}
          >
          <div className='flex flex-wrap justify-center gap-5 border border-green-700 px-5'>
          <FaNodeJs className='w-11 h-11'/>
          <BiLogoPostgresql className='w-11 h-11'/>
          <TbBrandDjango className='w-11 h-11'/>
          <SiMongodb className='w-11 h-11'/>
          <SiJest className='w-11 h-11'/>
          <SiPostman className='w-11 h-11'/>
          <SiTrello className='w-11 h-11'/>
          <FaJira className='w-11 h-11'/>
          <SiExpress className='w-11 h-11'/>
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
