import React from 'react'
import { motion } from 'framer-motion'
import { LinkedInIcon, GithubIcon, TwitterIcon, Barbell } from './Icons'
import Header from './Header'



const NavBar = () => {

    return (
        <>
         
        <header className='sticky top-0 w-full px-32 -mb-12 font-medium flex justify-between items-center'> 
            <nav className='text-primary'>
                <Header />
            </nav>
            <nav className="text-primaryDark flex items-center justify-center flex-wrap">
                <motion.a href="https://twitter.com/kaiusse" target={"_blank"}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className="w-6 mx-3">
                    <TwitterIcon />
                </motion.a>
                <motion.a href="https://github.com/kayishau" target={"_blank"} className="w-6 mx-3"
                 whileHover={{y:-2}}
                 whileTap={{scale:0.9}}>
                    <GithubIcon />
                </motion.a>
                <motion.a href="https://www.linkedin.com/in/kayisha-ulysse/" target={"_blank"} className="w-6 ml-3"
                 whileHover={{y:-2}}
                 whileTap={{scale:0.9}}>
                    <LinkedInIcon />
                </motion.a>      
            </nav>
            
        </header>
    
        </>
    )
}
export default NavBar

