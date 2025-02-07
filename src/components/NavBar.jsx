import React, { useState } from 'react'
import Babitalogo from '../assets/Babitalogo.jpg'
import { Link } from 'react-scroll'
import { RxHamburgerMenu } from "react-icons/rx";
import MobileNavbar from './MobileNavbar';
import { RxCross2 } from "react-icons/rx";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import useTheme from '../contexts/Theme';

const NavBar = () => {
  const [openHamb, setOpenHamb] = useState(false);
  const { themeMode, darkTheme, lightTheme } = useTheme();

  return (
    <div className='max-w-[1000px] mx-auto pt-4 flex justify-between items-center px-6 sticky top-0 dark:text-white z-50 dark:bg-[#36404a]'>
      <h1 class="text-4xl bg-gradient-to-r from-[#FD6F00] via-red-500 to-[#FD6F00] inline-block text-transparent bg-clip-text">Babita</h1>
      <div className='flex justify-center items-center align-middle gap-6'>
        <div className='flex justify-center items-center align-middle gap-6 pt-3 text-sm '>
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            activeClass="text-[#FD6F00] dark:text-[#FD6F00] underline underline-offset-4 "
            className="lg:block hidden cursor-pointer  hover:text-[#FD6F00]"
          >Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            activeClass="text-[#FD6F00] dark:text-[#FD6F00] underline underline-offset-4 "
            className="lg:block hidden cursor-pointer hover:text-[#FD6F00]"
          >About
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            activeClass="text-[#FD6F00] dark:text-[#FD6F00] underline underline-offset-4 "
            className="lg:block hidden cursor-pointer hover:text-[#FD6F00]"
          >Skills
          </Link>
          <Link
            to="qualifications"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            activeClass="text-[#FD6F00] dark:text-[#FD6F00] underline underline-offset-4 "
            className="lg:block hidden cursor-pointer hover:text-[#FD6F00]"
          >Qualifications
          </Link>
          <Link
            to="project"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            activeClass="text-[#FD6F00] dark:text-[#FD6F00] underline underline-offset-4 "
            className="lg:block hidden cursor-pointer hover:text-[#FD6F00]"
          >Projects
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            activeClass="text-[#FD6F00] dark:text-[#FD6F00] underline underline-offset-4 "
            className="lg:block hidden cursor-pointer hover:text-[#FD6F00]"
          >Contact me
          </Link>
        </div>
        <div className='text-center'>
          <div className='pt-3 flex'>
            <button
              type="button"
              className="hidden sm:block text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Download CV</button>
            {
              openHamb ? <RxCross2
                onClick={() => setOpenHamb(false)}
                className='block lg:hidden text-3xl pb-1' />
                :
                <RxHamburgerMenu
                  onClick={() => setOpenHamb(true)}
                  className='block lg:hidden text-3xl pb-1' />
            }
          </div>
        </div>
        {
          openHamb && <MobileNavbar />
        }
        <div className='hidden lg:block'>
        {
          themeMode === "light" ?
            <MdDarkMode
              onClick={darkTheme}
              className='h-10 w-8 text-[#FD6F00]' />
            :
            <MdOutlineLightMode
              onClick={lightTheme}
              className='h-10 w-8 ' />
        }
        </div>



      </div>
    </div>
  )
}

export default NavBar