import Image from 'next/image'
import React from 'react'

const ServiceBox = ({name, description, img}) => {
  return (
    <div className='rounded-lg sm:w-5/12 pb-6 pt-4 px-6 backdrop-blur-md text-left bg-[#003E47]/10 flex items-center max-sm:flex-col gap-4'>
        <div className='flex-1'>
            <Image height={200} width={200} src={img} className='rounded-full h-32 w-32 border-green-800 border-[6px]' alt={name} />
        </div>
        <div className='flex-3 text-[#003E47] max-sm:text-center'>
            <h1 className='font-semibold text-2xl mb-3'>{name}</h1>
            <p className='text-sm'>{description}</p>
        </div>
    </div>
  )
}

export default ServiceBox
