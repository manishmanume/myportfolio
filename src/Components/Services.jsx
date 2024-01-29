import React from 'react'
import ServiceCard from '../Layout/ServiceCard'
import { BiCodeAlt } from "react-icons/bi";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaCss3 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const Services = () => {
    const icon1 = <BiCodeAlt size={55} className='text-brightColor'/>
    const icon2 = <DiJavascript  size={55} className='text-brightColor'/>
    const icon3 = <FaReact  size={55} className='text-brightColor'/>
    const icon4 = <FaNodeJs  size={55} className='text-brightColor'/>
    const icon5 = <SiMongodb  size={55} className='text-brightColor'/>
    const icon6 = <SiMysql  size={55} className='text-brightColor'/>
    const icon7 = <SiTailwindcss  size={55} className='text-brightColor'/>
    const icon8 = <FaGithub  size={55} className='text-brightColor'/>
    const icon9 = <FaCss3  size={55} className='text-brightColor'/>

  return (
    <div className='min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 bg-backgroundColor'>
        <h1 className='text-center font-semibold text-4xl mt-24 lg:mt-14 mb-8 lg:mb-4'>My <span className='text-brightColor'>Services</span> </h1>

        <div className='flex flex-wrap items-center justify-center gap-5 mt-4'>
            <ServiceCard icon={icon1} title="Web development"/>
            <ServiceCard icon={icon9} title="CSS3"/>
            <ServiceCard icon={icon2} title="JavaScript developer"/>
            <ServiceCard icon={icon3} title="React developer"/>
            <ServiceCard icon={icon7} title="Tailwind css"/>
            <ServiceCard icon={icon4} title="Node developer"/>
            <ServiceCard icon={icon5} title="MongoDB developer"/>
            <ServiceCard icon={icon6} title="MySql developer"/>
            <ServiceCard icon={icon8} title="Github"/>
        </div>
    </div>
  )
}

export default Services