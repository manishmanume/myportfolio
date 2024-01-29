import React from 'react'
import Educations2 from '../Layout/Educations2'

const Experience = () => {
  return (
    <div  className='min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor'>
        <h1 className='text-center font-semibold text-4xl mt-24 lg:mt-16 mb-8 lg:mb-7'>Work History</h1>

        <div>

        <Educations2 title="Lead Web Developer"
                />
        <Educations2 title="Junior Web Developer"
                />
        </div>
    </div>
  )
}

export default Experience