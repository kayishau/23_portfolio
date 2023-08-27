import React from "react";
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";

const NavLinks = (props) => {
  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  const animateFrom = {opacity: 1, x:0}
  const animateTo = {opacity: 1, x:0}

  const renderNavLinks = (content) => {
    const scrollToId = `${content.toLowerCase()}Section`;

    const handleClickNav = () => {
      document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth" });
    };

    return (
      <>
        <ul key={content} className="inline-block px-2 tablet:px-5 tablet:mt-1 tablet:delay-150 tablet:hover:bg-primaryDark tablet:hover:text-white tablet:hover:font-bold items-center justify-center cursor-auto">
          <li 
          // initial={animateFrom}
          // animate={animateTo}
          className="self-center hover:text-white transition duration-150 ease-in-out "
          onClick={() => props.isMobile && props.closeMobileMenu( )}
          >
            <button onClick={handleClickNav}
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
        <nav>
          {navLinks.map((nav) => renderNavLinks(nav))}
          <div className="text-primaryDark flex items-center justify-center gap-3 my-2">
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
