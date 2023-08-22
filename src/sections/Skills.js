import {
  ReactIcon,
  TailwindIcon,
  Bootstrap,
  Figma,
  Canva,
  Adobe,
  MongoDB,
  Django,
  Sql,
  NodeJs,
  NextJs,
  JavaScript,
  Python,
  Rust,
} from "../components/Icons";
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
        <div className="w-10/12 h-screen gap-10 flex flex-col border border-green-700 justify-center"
        style={{
          backgroundImage: "url(/img/skillsbg.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",       
        }}
        >
        <h1 className="font-cg text-4xl text-center border border-black font-extrabold mt-10">Skills :)</h1>
        <div className="flex text-center justify-around border border-black">
          <div className="w-1/3">
          <h2>Frontend</h2>
          </div>
          <div className="w-1/3">
          <h2>Languages</h2>
          </div>
          <div className="w-1/3">
          <h2>Backend</h2>
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
