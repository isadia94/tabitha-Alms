import Image from "next/image";
import { MenuAlt3Icon } from "@heroicons/react/solid";
import Link from "next/link";
function Header() {
  return (
    <> 
    <div className="h-screen w-screen bg-black absolute top-0 left-0 z-50 hidden">
    </div> 
      
 <header className="p-4 bg-transparent flex justify-between items-center w-[1200px] fixed z-30">
      <div className="flex flex-col pl-6">
        <h1 className="font-Poppins text-2xl text-center font-bold text-black">Tabitha</h1>
      </div>

      <nav>
      

        {/* navLinks for large screens */}
        <div className="bg-green-900 flex items-center justify-center px-3 py-3 cursor-pointer rounded-md">
        <MenuAlt3Icon className="h-8  text-white " />
        </div>
        
      </nav>
    </header></>
 
  );
}

export default Header;
