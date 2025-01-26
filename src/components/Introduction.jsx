import React from 'react'

import Typewriter from 'typewriter-effect';

import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import ImageSection from './ImageSection';

function Introduction() {
    return (
        
        <div 
        id = 'home'
        className='w-[1000px] mx-auto h-[450px] my-5 gap-10 flex justify-center items-center'>
            <div className='w-[58%] flex flex-col items-start  gap-y-3 p-10'>
                <p className='text-sm font-bold'>Hi I am</p>
                <p className='text-3xl font-bold text-[#FD6F00]'>Babita Kumari</p>

                <div className='text-4xl font-bold flex items-center gap-2 flex-wrap'>
                    <h2 className='text-[#FD6F00]'>A <span>&lt;</span></h2>
                    <Typewriter
                        options={{
                            strings: [ 'Web Developer', 'Frontend Developer', 'Coder', 'Learner'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    <span className='text-[#FD6F00]'>/&gt;</span></div>
                {/* <div className='text-5xl font-bold px-28'>Designer</div> */}
                <p className='text-start text-slate-600 py-4'>I'm a Web developer and here is my Portfolio website.
                Here you'll learn about my journery as web developer and a Software Developer.
                </p>
                <div>
                    <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-10 py-2.5 text-center me-2 mb-2 ">Hire Me</button>
                </div>
            </div>
            <div className='w-[48%] h-full flex flex-col gap-'>
                <ImageSection />
                <div className='flex justify-center items-end gap-4 p-5 mt-3'>
                    <FaFacebook />
                    <FaXTwitter />
                    <FaInstagram />
                    <FaLinkedin />
                </div>
            </div>
        </div>
    )
}

export default Introduction