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
        <h2 className="font-cg text-4xl font-extrabold mt-0">Skills</h2>
        {/* TODO: make cards or figure out formatting for skills section */}

           



         
        
        <div className=" font-cg self-end mb-10 mr-6">
              <h1 className="text-black text-4xl self-end">3</h1>
            </div>
      </section>
    </>
  );
}
