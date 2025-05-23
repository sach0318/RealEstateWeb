import { useEffect, useState } from "react";
import { assets } from "../assets/assets";
const Navbar = () => {
  const [mobile,setMobile] = useState(false)

  useEffect(()=>{

    if(mobile){
      document.body.style.overflow = "hidden"
    }else{
       document.body.style.overflow = "auto"

    }

    return ()=> {
       document.body.style.overflow = "auto";
    }

  },[mobile])

  return (
    <div className="absolute  top-0 left-0 w-full z-10 ">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent ">
        <img src={assets.logo} alt="img" />
        <ul className=" hidden md:flex gap-7 text-white   ">
          <a href="#Header" className="cursor-pointer hover:text-gray-400 ">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-400 ">
            About
          </a>
          <a href="#Projects" className="cursor-pointer hover:text-gray-400 ">
            Projects
          </a>
          <a href="#Testimonals" className="cursor-pointer hover:text-gray-400 ">
            Testimonals
          </a>
        </ul>

        <button className="hidden md:block bg-white px-8 py-2 rounded-full ">
          Sign up
        </button>
        <img
          onClick={() => {
            setMobile(true);
          }}
          src={assets.menu_icon}
          className="md:hidden w-7 cursor-pointer"
          alt="img"
        />
      </div>

      <div
        className={`md:hidden ${
          mobile ? "fixed w-full" : "h-0 w-0"
        }  top-0 right-0 bottom-0 overflow-hidden  bg-white transition-all `}
      >
        <div className="flex justify-end p-6 cursor-pointer ">
          <img
            onClick={() => {
              setMobile(false);
            }}
            src={assets.cross_icon}
            className="w-6"
            alt=""
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text:lg font-medium ">
          <a
            onClick={() => {
              setMobile(false);
            }}
            href="#Header "
            className="px-4 py-2 rounded-full inline-block "
          >
            Home
          </a>
          <a
            onClick={() => {
              setMobile(false);
            }}
            href="#About "
            className="px-4 py-2 rounded-full inline-block "
          >
            About
          </a>
          <a
            onClick={() => {
              setMobile(false);
            }}
            href="#Projects"
            className="px-4 py-2 rounded-full inline-block "
          >
            Projects
          </a>
          <a
            onClick={() => {
              setMobile(false);
            }}
            href="#Testimonal "
            className="px-4 py-2 rounded-full inline-block "
          >
            Testimonal
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
