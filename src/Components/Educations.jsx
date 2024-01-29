import React from 'react'
import EducationCard from '../Layout/EducationCard'
import Educations2 from '../Layout/Educations2'

const Educations = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor'>
        <h1 className='text-center font-semibold text-4xl mt-24 lg:mt-16 mb-8 lg:mb-7'>Educations</h1>

            <div>
                <EducationCard/>
                <Educations2 title="Web Development Course"
                />
                
            </div>

    </div>
  )
}

export default Educations