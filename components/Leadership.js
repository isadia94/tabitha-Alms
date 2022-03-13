import Image from "next/image";


import {useRef, useEffect} from 'react'

function Leadership() {
  const leadershipRef = useRef(null)
  const leaderShipTitleRef =useRef(null)
  const leadershipParaRef = useRef(null)


 
  return (
    <div ref={leadershipRef} className="md:relative mt-16 mb-16 rounded-lg px-5">
      <div className="relative rounded-lg  h-80 md:h-[600px] shadow-2xl">
        <Image
 
          src="/leader.png"
          objectFit="contain"
          layout="fill"
          className="rounded-lg object-bottom md:object-right"
          id="image"
        />
      </div>
      <div className="md:absolute md:top-12">
        <h3 className="mt-10 ml-8 text-lg font-light font-Magenda" id="heading">Our Leadership</h3>
        <div className="h-[0.4px] ml-8 w-12 bg-yellow-400 mb-8"/>
        <div className=" ml-8 mt-5">
          <div className="leadership__title" ref={leaderShipTitleRef}>
          <h2 className="text-6xl font-extrabold font-Poppins leader">Rev. Anthony + </h2>
          <h2 className="text-6xl font-extrabold font-Poppins leader2">
         
            Rev. Mourine <br/>Musembi
          </h2>
          </div>
         
          <p ref={leadershipParaRef} className="mt-6 text-sm leading-relaxed md:max-w-[400px] font-Poppins" id="leader3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl risus,
            tristique risus ut in nulla pretium massa. In pretium, venenatis
            rutrum lectus ullamcorper sodales pellentesque. Convallis ultricies
            amet massa, neque varius amet, vestibulum in. Lacus cursus morbi et
            eget. Vel fermentum mattis enim aliquet. Lacinia scelerisque sit
            quam elit.
          </p>
          <div className="relative mt-6">
            <p className="heading absolute left-9 text-xs font-Poppins">More</p>
            <svg
              width="114"
              height="32"
              viewBox="0 0 114 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16" cy="16" r="15.5" stroke="#fad909" />
              <path
                d="M113.354 16.3536C113.549 16.1583 113.549 15.8417 113.354 15.6464L110.172 12.4645C109.976 12.2692 109.66 12.2692 109.464 12.4645C109.269 12.6597 109.269 12.9763 109.464 13.1716L112.293 16L109.464 18.8284C109.269 19.0237 109.269 19.3403 109.464 19.5355C109.66 19.7308 109.976 19.7308 110.172 19.5355L113.354 16.3536ZM16 16.5H113V15.5H16V16.5Z"
                fill="#fad909"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leadership;
