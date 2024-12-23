import React from 'react'
import { RiGraduationCapFill } from "react-icons/ri";
import Leftbox from './Qualification/Leftbox';
import Path from './Qualification/Path';
import Rightbox from './Qualification/Rightbox';



function Qualifications() {
    let education = [
        {
            id : 1,
            coursename: "B.Tech Information Technology",
            collegename: "Asansol Engineering College",
            year: "2022 - 2026"
        },
        {
            id : 2,
            coursename: "Senior Secondary School",
            collegename: "St. Mary Goretti Girls' Higher Secondary School",
            year: "2019 - 2021"
        },
        {
            id : 3,
            coursename: "Secondary School",
            collegename: "St. Mary Goretti Girls' Higher Secondary School",
            year: "2009 - 2019"
        }
    ]
  return (
    <div className='w-[1140px] mx-auto pt-14 h-screen'>
        <div className='w-[80%] mx-auto flex flex-col justify-center items-center gap-3'>
            <h1 className='text-4xl font-semibold px-1'>Qualifications</h1>
            <p className='text-slate-600'>My Educational Qualification & Work Experience</p>

            <div className='w-[60%] pt-10'>
                <div className='w-[80%] mx-auto flex justify-center items-center text-[#FD6F00] '>
                    <RiGraduationCapFill className='text-2xl mt-1'/>
                    <h1 className='text-2xl font-semibold px-1'>Education</h1>
                </div>
            </div>
            
            <div className='w-[60%] h-32 mx-auto mt-5'>
                <div className='flex h-full'>
                    <Leftbox item = {education[0]}/>
                    <Path/>
                    <Rightbox/>
                </div>

                <div className='flex h-full'>
                    <Rightbox/>
                    <Path/>
                    <Leftbox item = {education[1]}/>
                </div>
                
                <div className='flex h-full'>
                    <Leftbox item = {education[2]}/>
                    <div className='w-6 h-6 rounded-full bg-[#FD6F00] ml-6'></div>
                    <Rightbox/>
                </div>

            </div>
            
        </div>
    </div>
  )
}

export default Qualifications