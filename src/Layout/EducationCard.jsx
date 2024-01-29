import React from 'react'

const EducationCard = (props) => {
  return (
    <div className='flex flex-col lg:flex-row py-4'>
        <div className='w-full lg:w-2/4'>
            <h2 className='font-semibold'>{props.title}</h2>
            <div className='mt-2'>
                <p>Student</p>
                <h4>Maharishi Dayanand University (Rohtak)</h4>
                <p>August-2016 - june-2019</p>
            </div>
        </div>
        <div>
            <h2 className='font-semibold mt-2 lg:mt-0'>Bachelor's of Commerce</h2>
            <p className='mt-2'>I earned my Bachelor's degree in Commerce from (Maharishi dayanand university), As a dedicated and passionate educator, The curriculum covered a diverse range of subjects and management, providing me with a well-rounded foundation in the field.</p>
            <div className='bg-slate-500 w-full h-0.5 mt-2'></div>
        </div>
    </div>
  )
}

export default EducationCard