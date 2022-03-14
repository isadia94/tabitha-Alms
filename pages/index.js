import { useState } from "react";

import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import { MenuAlt3Icon } from "@heroicons/react/solid";
import Footer from "../components/Footer";

import Hero from "../components/Hero";
import Leadership from "../components/Leadership";
import Services from "../components/Services";


export default function Home() {
  
  const handleClick =()=>{
    setIsActive(prevIsActive => !prevIsActive)
  }

  const [isActive, setIsActive]= useState(false)
  if(!isActive){
    return (
      <div>
        <Head>
          <title>Tabitha Alms Organisation</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@400;700;900&family=Playfair+Display:wght@400;500;600;700;800;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100&family=Rozha+One&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="//db.onlinewebfonts.com/c/4c4c08af466e9ad071b6d69cf44093df?family=Saol+Display+Regular"
            rel="stylesheet"
            type="text/css"
          />
          <meta
            name="description"
            content="This is a donating organisation in Kenya made to help the needy "
          />
          <meta
            name="author"
            content="Brian Lusigi - 0796661363 - developerisadia@gmail.com"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        

        <header className="p-4 bg-transparent flex justify-between items-center w-[1200px] fixed z-30">
       <div className="flex flex-col pl-6">
       {/* <h1 className="font-Poppins text-2xl text-center font-bold text-black">Tabitha</h1> */}
       <img src="./logo.jpeg" className="w-[90px]" alt="" />
       </div>

       <nav>
      

        {/* navLinks for large screens */}
        <div className="bg-green-900 flex items-center justify-center px-3 py-3 cursor-pointer rounded-md">
        <MenuAlt3Icon className="h-8  text-white " onClick={handleClick} />
        </div>
        
       </nav>
  </header>

      <Hero />
    
      <section className="relative">
        <About />
        <Services/>
  
        <Leadership />
      </section>

      {/* footer */}

      <Footer />
      </div>
    )
  }
  

    return (
    
    <div className="relative">
       <header className= "p-4 bg-transparent flex justify-between items-center w-[1200px] fixed z-[100]">
       <div className="flex flex-col pl-6">
       <h1 className="font-Poppins text-2xl text-center font-bold text-white">Tabitha</h1>
       </div>

       <nav>
      

        {/* navLinks for large screens */}
        <div className="bg-green-900 flex items-center justify-center px-3 py-3 cursor-pointer rounded-md">
        <MenuAlt3Icon className="h-8  text-white " onClick={handleClick} />
        </div>
        
       </nav>
  </header>

        <div className="h-screen w-screen bg-black absolute top-0 left-0 z-50 ">
      </div>
    </div>
    )

     
  
}
