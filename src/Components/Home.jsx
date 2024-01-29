import React from 'react'
import image from '../Assets/mypic.png'
import Button from '../Layout/Button'


const Home = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:flex-row items-center lg:px-32 px-5 bg-backgroundColor'>
        <div className='flex flex-col items-center text-center lg:text-start lg:items-start w-full lg:w-3/4 space-y-4'>
            <h1 className='text-5xl font-semibold leading-tight mt-24'>I'm Manish Mehta
                <span className='text-amber-600'> <br /> MERN Stack </span>
                 Developer
            </h1>
            <p>I am a fresher in web development with a solid background in front-end and back-end technologies that is results-driven and extremely motivated. I have learned HTML & CSS, JavaScript, react.js, My SQL, Node.js, mongo dB, recent course work. I have made various web sites i.e. blogging app, e-commerce, logging panel, expense tracker etc</p>
           <Button title='HIRE ME'/>
        </div>
        <div className='mt-20 '>
            <img className='drop' width={600} src={image} alt="" />
        </div>
    </div>
  )
}

export default Home