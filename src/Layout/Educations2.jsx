import React from 'react'

const Educations2 = (props) => {
  return (
    <div className='flex flex-col lg:flex-row py-4'>
    <div className='w-full lg:w-2/4'>
        <h2 className='font-semibold'>{props.title}</h2>
        <div className='mt-2'>
            <p>Student</p>
            <p>July 2023 - January 2024</p>
        </div>
    </div>
    <div>
        <h2 className='font-semibold mt-2 lg:mt-0'>Web developer</h2>
        <p className='mt-2'>Web developer with a proven track record at code pulse IT Services. Strong problem-solving skills and a commitment to delivering high-quality web solutions. Ready to leverage my expertise in a dynamic development environment. </p>
        <div className='bg-slate-500 w-full h-0.5 mt-2'></div>
    </div>
</div>
  )
}

export default Educations2