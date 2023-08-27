import React from "react";
import { useState } from "react";
import NavLinks from "./NavLinks";
// import { TbNavigation } from "react-icons/tb"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineCloseSquare } from "react-icons/ai"

const MobileNavigation = () => {

    const [openBurger, setOpenBurger] = useState(false)

    const hamburgerIcon = <GiHamburgerMenu className="w-6 h-6 absolute right-5 top-5 cursor-pointer"
    onClick={() => setOpenBurger(!openBurger)}/>

    const closeIcon = <AiOutlineCloseSquare className="w-8 h-8 absolute right-5 top-5 cursor-pointer"
    onClick={() => setOpenBurger(!openBurger)}/>

  return (
    <>
    <nav className="tablet:hidden fixed top-0 w-full flex justify-between items-center bg bg-lime-500">
            <nav className='text-primary font-cg text-xl font-extrabold border border-red-600 flex items-center justify-center'>

                {openBurger ? closeIcon : hamburgerIcon}
                {openBurger && <NavLinks />}

            </nav>   
    </nav>
   
    
    </>
  )
};

export default MobileNavigation;
