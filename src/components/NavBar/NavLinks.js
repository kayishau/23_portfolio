import React from "react";
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";

const NavLinks = () => {
  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  const renderNavLinks = (content) => {
    const scrollToId = `${content.toLowerCase()}Section`;

    const handleClickNav = () => {
      document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth" });
    };

    return (
      <>
        <ul key={content} className="inline-block px-5 mt-1 delay-150 hover:bg-primaryDark hover:text-white hover:font-bold items-center justify-center">
          <li>
            <button onClick={handleClickNav} id="myImage"
            >{content}
            </button>
          </li>
        </ul>
      </>
    );
  };

  return (
    <header>
      <div>
        <nav className="flex items-center justify-center">
          {navLinks.map((nav) => renderNavLinks(nav))}
          <div className="text-primaryDark flex items-center justify-center flex-wrap">
                <motion.a href="https://twitter.com/kaiusse" target={"_blank"} rel="noreferrer" 
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}>
                  <FaTwitter className='w-5 h-5 tablet:w-8 tablet:h-8' />
                </motion.a>
                <motion.a href="https://github.com/kayishau" target={"_blank"} rel="noreferrer" 
                 whileHover={{y:-2}}
                 whileTap={{scale:0.9}}>
                    <PiGithubLogoFill className='w-5 h-5 tablet:w-8 tablet:h-8' />
                </motion.a>
                <motion.a href="https://www.linkedin.com/in/kayisha-ulysse/" target={"_blank"}  rel="noreferrer"
                 whileHover={{y:-2}}
                 whileTap={{scale:0.9}}>
                   <FaLinkedin className='w-5 h-5 tablet:w-8 tablet:h-8' />
                </motion.a>      
            </div>
        </nav>
      </div>
    </header>
  );
};

export default NavLinks;
