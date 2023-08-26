import React from 'react';
import { motion } from 'framer-motion';
import NavLinks from './NavLinks';
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";

const Navigation = () => {
  return (
    <>
    <nav className='tablet:max-2xl:visible hidden tablet:flex'>
    <header className='sticky top-0 w-full -mb-10  px-32 flex justify-between items-center bg bg-cyan-600'> 
            <nav className='text-primary font-cg text-xl font-extrabold'>
               <NavLinks />
            </nav>
            <nav className="text-primaryDark flex items-center justify-center flex-wrap pt-5">
                <motion.a href="https://twitter.com/kaiusse" target={"_blank"} rel="noreferrer" 
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className="w-6 mx-3">
                  <FaTwitter className='w-8 h-8' />
                </motion.a>
                <motion.a href="https://github.com/kayishau" target={"_blank"} rel="noreferrer"  className="w-6 mx-5"
                 whileHover={{y:-2}}
                 whileTap={{scale:0.9}}>
                    <PiGithubLogoFill className='w-8 h-8' />
                </motion.a>
                <motion.a href="https://www.linkedin.com/in/kayisha-ulysse/" target={"_blank"}  rel="noreferrer" className="w-6 ml-3"
                 whileHover={{y:-2}}
                 whileTap={{scale:0.9}}>
                   <FaLinkedin className='w-8 h-8' />
                </motion.a>      
            </nav>
            
        </header>
    
    </nav>
  
    </>
  )
};

export default Navigation;
