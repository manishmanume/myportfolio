import React from 'react'

const ServiceCard = (props) => {
  return (
    <div className='flex flex-col items-center bg-white hover:bg-black hover:text-white transition-all hover:translate-y-4 w-full lg:w-1/4 py-4 gap-4 cursor-pointer rounded-md'>
        <div>
            {props.icon}
        </div>
        <h2 className='text-xl font-semibold'>{props.title}</h2>
        <p>blog, Landing page etc.</p>
    </div>
  )
}

export default ServiceCard