import React, { useState } from "react";
import Link from "next/link";
import Router from "next/router";
import { FaFacebookF } from "react-icons/fa";
import { RiProjectorFill } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

import { useRouter } from "next/router";
import useDarkMode from "../hook/useDarkMode";

const Navbar = () => {
  const router = useRouter();
  const [isChangRouter, setIsChangeRouter] = useState(false);

  const [isDarkMode, toggleDarkMode] = useDarkMode();

  // Router.events.on("routeChangeStart", () => {
  //   setIsChangeRouter(true);
  // });
  // Router.events.on("routeChangeComplete", () => {
  //   setIsChangeRouter(false);
  // });

  return (
    <div
      className=" h-[60px] fixed bottom-10 left-[50%] translate-x-[-50%]  border rounded-[20px] flex
     p-[10px]  drop-shadow-sm items-center justify-between "
    >
      <div>
        <Link href="/about">
          <div
            className={`group dark:bg-[#232323] hover:w-[60px] hover:h-[60px] hover:translate-y-[-15px] duration-100 w-[40px] h-[40px] bg-zinc-100 mr-[10px] rounded-[10px] flex items-center justify-center text-gray-icon`}
          >
            <AiFillHome className="group-hover:text-[30px] text-[20px] text-gray-500"></AiFillHome>

            {router.pathname == "/about" && (
              <div className="group-hover:bottom-[-20px] w-[4px] h-[4px] rounded-[50%] absolute bottom-[2px] bg-gray-500"></div>
            )}
          </div>
        </Link>
      </div>
      <div>
        <Link href="/">
          <div
            className={`group dark:bg-[#232323] hover:w-[60px] hover:h-[60px] hover:translate-y-[-15px] duration-100 w-[40px] h-[40px] bg-zinc-100 mr-[10px] rounded-[10px] flex items-center justify-center text-gray-icon`}
          >
            <FaUserCircle className="group-hover:text-[30px] text-[20px] text-gray-500"></FaUserCircle>

            {router.pathname == "/" && (
              <div className="group-hover:bottom-[-20px] w-[4px] h-[4px] rounded-[50%] absolute bottom-[2px] bg-gray-500"></div>
            )}
          </div>
        </Link>
      </div>
      <div>
        <Link href="/project">
          <div
            className={`group dark:bg-[#232323] hover:w-[60px] hover:h-[60px] hover:translate-y-[-15px] duration-100 w-[40px] h-[40px] bg-zinc-100 mr-[10px] rounded-[10px] flex items-center justify-center text-gray-icon`}
          >
            <RiProjectorFill className="group-hover:text-[30px] text-[20px] text-gray-500"></RiProjectorFill>

            {router.pathname == "/project" && (
              <div className="group-hover:bottom-[-20px] w-[4px] h-[4px] rounded-[50%] absolute bottom-[2px] bg-gray-500"></div>
            )}
          </div>
        </Link>
      </div>
      <div>
        <div
          className={`group dark:bg-[#232323] hover:w-[60px] hover:h-[60px] hover:translate-y-[-15px] duration-100 w-[40px] h-[40px] bg-zinc-100 mr-[10px] rounded-[10px] flex items-center justify-center text-gray-icon`}
        >
          <RiInstagramFill className="group-hover:text-[30px] text-[20px] text-gray-500"></RiInstagramFill>
        </div>
      </div>
      <div>
        <div
          className={`group dark:bg-[#232323] hover:w-[60px] hover:h-[60px] hover:translate-y-[-15px] duration-100 w-[40px] h-[40px] bg-zinc-100 mr-[10px] rounded-[10px] flex items-center justify-center text-gray-icon`}
        >
          <FaFacebookF className="group-hover:text-[30px] text-[20px] text-gray-500"></FaFacebookF>
        </div>
      </div>
      <div>
        <a
          target="_blank"
          href={`https://github.com/dat220301?tab=repositories`}
          rel="noopener noreferrer"
        >
          <div
            className={`group dark:bg-[#232323] hover:w-[60px] hover:h-[60px] hover:translate-y-[-15px] duration-100 w-[40px] h-[40px] bg-zinc-100 mr-[10px] rounded-[10px] flex items-center justify-center text-gray-icon`}
          >
            <BsGithub className="group-hover:text-[30px] text-[20px] text-gray-500"></BsGithub>
          </div>
        </a>
      </div>

      <div onClick={() => toggleDarkMode(!isDarkMode)}>
        <div
          className={`group hover:w-[60px] dark: hover:h-[60px] dark:bg-[#232323] hover:translate-y-[-15px] duration-100 w-[40px] h-[40px] bg-zinc-100 mr-[10px] rounded-[10px] flex items-center justify-center text-gray-icon`}
        >
          {isDarkMode ? (
            <MdDarkMode className="group-hover:text-[30px] text-[20px] text-gray-500"></MdDarkMode>
          ) : (
            <MdLightMode className="group-hover:text-[30px] text-[20px] text-gray-500"></MdLightMode>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
