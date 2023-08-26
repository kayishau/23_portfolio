import { motion } from "framer-motion"

const quote = {
    initial:{
        opacity:0,
    },
    animate:{
        opacity:1,
        transition:{
            delay:2.3
            // staggerChildern: 0.08,
        }
    }
}
const singleWord = {
    initial:{
        opacity:0,
        y:50,
    },
    animate:{
        opacity:1,
        y:0,
        transition:{
            duration:6
        }
    }
}


const AnimatedText = ({text, className=""}) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden">

         <motion.h1 className={`inline-block w-full text-dark font-bold capitalize text-3xl md:text-5xl xl:text-6xl ${className}`}
         variants={quote}
         initial="initial"
         animate="animate"
         >
           {
            text.split(" ").map((word, index) =>
            <motion.span key={word+'-'+index} className='inline-block'
            varirants={singleWord}
            // initial="initial"
            // animate="animate"
            >
                {word}&nbsp;
            </motion.span>)
           }
        </motion.h1>
    </div>
  )
}

export default AnimatedText;
