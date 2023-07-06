import React from 'react'
import { motion } from 'framer-motion'


const NavBar = () => {

    return (
        <>
        <header className='w-full px-32 py-8 font-medium flex justify-between items-center'> 
            <nav>
                <a href=''>HOME</a>
                <a href=''>ABOUT</a>
                <a href=''>PROJECTS</a>
                <a href=''>CONTACT ME</a>
            </nav>
            <nav>
            <motion.a href="https://www.linkedin.com/in/kayisha-ulysse/" target={"_blank"} className="w-6 ml-3"
                 whileHover={{y:-2}}
                 whileTap={{scale:0.9}}>
                    {/* <LinkedInIcon /> */}
                    LinkedInIcon
                </motion.a>
                <a href=''>Twitter</a>
                <a href=''>Github</a>
            </nav>
        <h1 className='text-primary'>NavBar</h1>
        </header>
    
        </>
    )
}
export default NavBar

