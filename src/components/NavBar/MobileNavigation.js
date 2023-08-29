import React from "react";
import { useState } from "react";
import NavLinks from "./NavLinks";
// import { TbNavigation } from "react-icons/tb"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineCloseSquare } from "react-icons/ai"

const MobileNavigation = () => {

    const [openBurger, setOpenBurger] = useState(false)

    const hamburgerIcon = <GiHamburgerMenu className="w-6 h-6 right-5 top-4 absolute cursor-pointer"
    onClick={() => setOpenBurger(!openBurger)}/>

    const closeIcon = <AiOutlineCloseSquare className="w-7 h-7 absolute right-5 top-4 hover:text-white duration-150 ease-in-out cursor-pointer"
    onClick={() => setOpenBurger(!openBurger)}/>

    const closeMobileMenu = () => setOpenBurger(false)

  return (
    <>
    <div
    //  className="w-full h-[50px] bg-primary/50 fixed"
     >
    <nav className="tablet:hidden fixed w-full justify-center flex duration-150 top-5 ease-in-out"
      style={{
        backgroundImage: "url(/img/navbar5.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
            <div className='font-cg text-xl font-extrabold '>
                {openBurger ? closeIcon : hamburgerIcon}
                {openBurger && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
            </div>   
    </nav>
    </div>
    </>
  )
};

export default MobileNavigation;
