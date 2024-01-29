import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const Navbar = () => {
    const [menu, setmenu] = useState(false)

    const changehandle = () => {
        setmenu(!menu)
    }

    const closemenu = () => {
        setmenu(false)
    }
    return (
        <div className='fixed w-full z-10'>
            <div>
                <div className='flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                    <div className='flex flex-row items-center cursor-pointer'>
                        <h1 className='text-3xl font-semibold text-amber-600'>Manish.</h1>
                    </div>

                    <nav className='hidden lg:flex flex-row items-center text-lg font-medium gap-8'>
                        <Link to='home'
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='corsor-pointer hover:text-amber-600 transition-all'>
                            Home</Link>
                        <Link to='about'
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='corsor-pointer hover:text-amber-600 transition-all'>
                            About me</Link>
                        <Link to='services'
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='corsor-pointer hover:text-amber-600 transition-all'>Services</Link>
                        <Link to='education'
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='corsor-pointer hover:text-amber-600 transition-all'>Educations</Link>
                        <Link to='experience'
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='corsor-pointer hover:text-amber-600 transition-all'>
                            Experiences</Link>
                        <Link to='portfolio'
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='corsor-pointer hover:text-amber-600 transition-all'>
                            Portfolio</Link>
                    </nav>



                    <div className='lg:hidden flex items-center'>
                        {menu ? (
                            <AiOutlineClose size={28} onClick={changehandle} />
                        ) : (
                            <HiOutlineMenuAlt1 size={28} onClick={changehandle} />
                        )}
                    </div>
                </div>
                <div className={`${menu ? "translate-x-0": "-translate-x-full"} lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center z-10 pt-8 w-full h-fit transition-transform duration-300 gap-3`}>
                <Link to='home'
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='corsor-pointer hover:text-amber-600 transition-all' onClick={closemenu}>
                            Home</Link>
                        <Link to='about'
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='corsor-pointer hover:text-amber-600 transition-all'onClick={closemenu}>
                            About me</Link>
                        <Link to='services'
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='corsor-pointer hover:text-amber-600 transition-all'onClick={closemenu}>Services</Link>
                        <Link to='education'
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='corsor-pointer hover:text-amber-600 transition-all'onClick={closemenu}>Educations</Link>
                        <Link to='experience'
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='corsor-pointer hover:text-amber-600 transition-all'onClick={closemenu}>
                            Experiences</Link>
                        <Link to='portfolio'
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='corsor-pointer hover:text-amber-600 transition-all'onClick={closemenu}>
                            Portfolio</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar