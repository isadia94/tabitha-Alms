import React, { useState, useRef, useEffect } from "react";
import { TweenLite, Power3 } from "gsap";
import Image from 'next/image'
import {ArrowNarrowUpIcon, ArrowNarrowDownIcon} from '@heroicons/react/solid'


import "reset-css";

const services = [
  {
    title: "Economic Empowerment",
    desc: "Targeted women are empowered through business trainings and support for business establishment",
   
    quote:
      "01."
  },
  {
    title: "Talent Development",
    desc: "Tabitha Alms organization at developing talents such as music and dancing",
    
    quote:
      "02."
  },
  {
    title: "Vocational Skills",
    desc: "Tabitha Alms organization aims at providing vocational skills such as: Driving, welding, hair dressing, cosmetics /beauty therapy etc",
    
    quote:
      "03."
  },
  {
    title: "ICT Training School",
    desc: "There is a plan to establish ICT training school to offer training in the following areas",
   
    quote:
      "04."
  },
  {
    title: "Income Generation Activities",
    desc: "The organization aims at supporting the targeted groups especially widows, single mothers and teenage mothers to improve living standards",
   
    quote:
      "05."
  },
  {
    title: "Early Child Development & Education",
    desc: "Tabitha Alms ministry support education of identified needy learners through paying of school fees",

    quote:
      "06."
  },
  {
    title: "Community outreach Program",
    desc: "Entails provision of food to targeted vulnerable groups i.e. street children, street families and other needy people",
   
    quote:
      "07."
  },
  {
    title: "Church leaders / Labourers support",
    desc: "Tabitha Alms Organization aims at establishing an ECD Centre for supporting orphans and vulnerable children",
  
    quote:
      "08."
  },
  {
    title: "Church Development Fund",
    desc: "Tabitha Alms organization being founded in JCC Nakuru church is also focused on the church welfare and development.",
 
    quote:
      "09."
  },
  {
    title: "Food Security Support and Empowerment Centre",
    desc: "The organization aims at establishing a food security support Centre for hosting the following activities",
   
    quote:
      "10."
  },
  {
    title: "Education program",
    desc: "Tabitha Alms ministry support education of identified needy learners through paying of school fees",
 
    quote:
      "11."
  },
  
];

function Services() {
  let sideBarRef =useRef(null)
  let mainSlideRef =useRef(null)
  let containerRef =useRef(null)


  
  let activeSlideIndex=0;
  const handleDown = ()=>{
    changeSlide("down")
    console.log("slideDown")
  }
  const handleUp = ()=>{
    changeSlide("up")
    console.log("slideUp")
  }

  useEffect(()=>{
   
    
  
    
    
    
  },[])
  function changeSlide(direction) {
    const sidebar = sideBarRef.current;
    const mainSlide = mainSlideRef.current;
    const container= containerRef.current;
    const slidesCount =11;
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    }

    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(-${activeSlideIndex * height}px)`
}

  return (
    <div className="h-screen relative pt-16 px-10">
      
      <h1 className="font-Magenda text-lg">Services</h1>
      <div className="h-[0.4px] w-12 bg-yellow-400 mb-8"/>
        <div>
          <h1 className='font-Poppins text-7xl font-extrabold'>WHAT WE <br/> DO ?</h1>
        </div>
        {/* <div className="h-[560px]  mt-16 ml-16">
            <ul>
              <li className="flex">
                <div className="s-image h-[560px] w-[400px]  relative">
                 <Image layout="fill" src="/img1.jpg" objectFit="cover"/>
                </div>
                <div className="s-content flex flex-col justify-center  pl-24 font-Poppins">
                  <p className="font-Magenda font-extrabold text-7xl text-gray-200">01</p>
                  <h2 className="font-extrabold text-5xl max-w-[500px] my-8">Economic Empowerment </h2>
                  <p className=" tracking-wide max-w-[400px] text-green-600 text-[14px] leading-5">Targeted women are empowered through business trainings and support for business establishment</p>
                </div>
              </li>
            </ul>
        </div> */}

        <div className="h-[560px]  mt-16 ml-16">
        <div className="container " ref={containerRef}>
      <div className="sidebar" ref={sideBarRef}>

      <div className="sidebar_1">
          
        </div>
      <div className="sidebar_2">
          
        </div>
      <div className="sidebar_3">
          
        </div>
      <div className="sidebar_4">
          
        </div>
      <div className="sidebar_5">
          
        </div>
      <div className="sidebar_6">
          
        </div>
    
      <div className="sidebar_7">
          
        </div>
    
      <div className="sidebar_8">
          
        </div>
    
      <div className="sidebar_9">
          
        </div>
    
      <div className="sidebar_10">
          
        </div>
    
      <div className="sidebar_11">
          
        </div>
    
       
      
      </div>
      <div className="main-slide" ref={mainSlideRef}>
        {services.map(({quote,title, desc})=>(
          <div key={quote} className="slide_1 shadow-2xl text-gray-100 flex justify-center pr-[40px]">
          <p className="font-Magenda text-7xl -mt-[100px] text-gray-500 mb-4">{quote}</p>
          <h1 className="font-Poppins text-5xl font-extrabold mb-6">{title}</h1>
          <p className="font-Poppins text-[14px] text-green-600 max-w-[400px]  leading-6">{desc}</p>
        </div>
        ))}
     
        
        {/*  */}
      </div>
      <div className="controls">
        <button className="down-button cursor-pointer" onClick={handleDown}>
       <ArrowNarrowDownIcon className="h-4"/>
        </button>
        <button className="up-button cursor-pointer" onClick={handleUp}>
        <ArrowNarrowUpIcon className="h-4"/>
        </button>
      </div>
    </div>

  

        </div>
    
    </div>
  );
}

export default Services;
