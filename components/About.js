import{useRef, useEffect} from 'react'
import Image from "next/image";
import { motion } from "framer-motion"
function About() {
  const aboutRef = useRef(null)
  return (
   
      <div ref={aboutRef} className="relative  h-[100vh] md:flex md:items-center  ">
      <div className="px-10  h-[100vh]  aboutSection flex justify-center flex-col text-black relative w-[50%]">
        <h1 className="heading font-normal text-lg font-Magenda " id='firstHeading'>About Us</h1>
        <div className="h-[0.4px] w-12 bg-white mb-8"/>
        <div>
          <h1 className='font-Poppins text-7xl font-extrabold'>WHO WE <br/> ARE ?</h1>
        </div>
        <div className="mt-12 space-y-4">
          <p className="text-[13px] md:font-light font-Poppins md:text-xl pr-[40px] aboutPara">
            Tabitha Alms Ministry Organization is a relief and development arm
            established as a ministry in JCC Nakuru church with the purpose of
            reaching out to the needyand vulnerable with care and love of God
            to empower them lead  wholesome and dignified lives.
          </p>
        </div>
        <div className="relative mt-6">
          <p className="absolute left-9 text-xs font-Poppins font-medium">Read More</p>
          <svg
            width="114"
            height="32"
            viewBox="0 0 114 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className='font-bold'
          >
            <circle cx="16" cy="16" r="15.5" stroke="#308a00" />
            <path
              d="M113.354 16.3536C113.549 16.1583 113.549 15.8417 113.354 15.6464L110.172 12.4645C109.976 12.2692 109.66 12.2692 109.464 12.4645C109.269 12.6597 109.269 12.9763 109.464 13.1716L112.293 16L109.464 18.8284C109.269 19.0237 109.269 19.3403 109.464 19.5355C109.66 19.7308 109.976 19.7308 110.172 19.5355L113.354 16.3536ZM16 16.5H113V15.5H16V16.5Z"
              fill="#308a00"
            />
          </svg>
        </div>
      </div>

      <div className="relative flex items-center justify-center mt-11 md:mt-0  h-screen w-[50%] aboutSection">
       <motion.div initial={{opacity:0 , y:50}} whileInView={{opacity:1, y:0,}} viewport={{once:true}} transition={{duration:0.7}}  className='h-[550px] w-[360px] about-picture'>
          
       </motion.div>
      </div>
    </div>
  
    
  
      
 
    
  );
}

export default About;
