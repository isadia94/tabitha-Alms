import Link from "next/link";
import { MailIcon, PhoneIcon } from "@heroicons/react/solid";


function Footer() {
  return (
    <div className="relative footer">
      <div className="grid footer grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 px-5 text-white border border-b-[1px] border-x-0">
        <div className="mt-12  mb-10 border-gray-600">
          <h3 className="text-white font-Poppins font-extrabold">TABITHA ALMS ORGANISATION</h3>
          <div className="md:hidden  w-full h-[1px] bg-gray-500 mt-8" />
        </div>

        <div className="md:mt-12">
          <h4 className="title text-white font-Poppins font-extrabold">LINKS</h4>
          <div className="mt-2 flex flex-col space-y-2 text-sm">
            <Link href="/">
              <a className="cursor-pointer font-Magenda font-light">US</a>
            </Link>
            <Link href="/">
              <a className="cursor-pointer font-Magenda font-light">WHAT WE DO</a>
            </Link>
            <Link href="/">
              <a className="cursor-pointer font-Magenda font-light">PROJECTS</a>
            </Link>
            <Link href="/">
              <a className="cursor-pointer font-Magenda font-light">OUR LEADERSHIP</a>
            </Link>

            <Link href="/">
              <a className="cursor-pointer font-Magenda font-light">DONATE</a>
            </Link>
          </div>
        </div>
        <div>
          <h4 className="text-white font-Poppins font-extrabold mt-10">CONTACTS</h4>
          <div className="mt-4 flex space-x-2">
            <PhoneIcon className="h-6" />
            <p className="font-Magenda">+254740239992</p>
          </div>
          <div className="mt-4 flex space-x-2">
            <MailIcon className="h-6" />
            <p className="font-Magenda">info@tabithaalms.org</p>
          </div>
          <div className="mt-6 flex space-x-5 mb-10">
            <Link href="/">
              <a>
                <img
                  src="/youtube.png"
                  loading="lazy"
                  alt=""
                  className="h-10 object-contain"
                />
              </a>
            </Link>
            <Link href="/">
              <a>
                <img
                  src="/facebook.png"
                  loading="lazy"
                  alt=""
                  className="h-10 object-contain"
                />
              </a>
            </Link>
            <Link href="/">
              <a>
                <img
                  src="/twitter.png"
                  loading="lazy"
                  alt=""
                  className="h-10 object-contain"
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="md:mt-12 md:grid">
          <form action="" className="relative mb-10">
            <h3 className="title max-w-[200px] text-white font-Poppins font-extrabold ">
              STAY UP TO DATE WITH TABITHA ALMS
            </h3>
            <input
              type="text"
              autoComplete="false"
              className="w-full  outline-none  py-2 bg-transparent border border-b-1 mt-2 border-t-0 border-x-0 "
              placeholder="Enter Email Address"
            />
            <input
              type="submit"
              value="Submit"
              className="absolute right-3 bottom-2 text-yellow-400 font-Poppins"
            />
          </form>
          <div className="md:hidden w-full h-[1px] bg-gray-500 mt-8" />
        </div>
      </div>
      <div>
        <div className="text-center mt-8 text-xs space-y-2 mb-3 text-white">
          <p>
            &copy; <span className="font-Poppins">2022 TABITHA ALMS</span>
          </p>
          <p className="font-Poppins">PRIVACY POLICY</p>
          <p className="font-Poppins">Terms + Conditions</p>
          <p className="font-Poppins">SMS Terms + Conditions</p>
        </div>
        <div className="md:hidden w-full h-[1px] bg-gray-500 mt-8" />
        <div className="mt-4 text-xs text-white">
          <p className="text-center font-Poppins">Developed by 0796661363 - Brian</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
