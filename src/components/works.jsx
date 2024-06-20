import React from 'react'
import worked1 from '/topimg2.jpg'
import worked2 from '/topimg3.jpg'
import worked3 from '/topimg4.jpg'
import worked4 from '/topimg5.jpg'

function Works() {
  return (
    <div className='w-full text-[#402E7A] min-h-40 pt-10 sm:pt-40 flex items-start justify-center gap-5 relative flex-wrap py-3 px-10'>
      <h1 className='text-4xl font-bold sm:absolute top-0 mb-10 sm:mb-0'>Our general work</h1>
      <div className='w-64 min-h-32 bg-[#cad5ff] rounded-xl p-3 flex flex-col items-center justify-start'>
        <img src={worked1} className='rounded-lg h-40 w-full object-cover object-center'/>
        <div className='w-full mt-3 text-zinc-800'>
          <h1 className='w-full flex items-center justify-between text-[17px] leading-none font-bold flex-nowrap relative overflow-hidden'>Motherboard problem <span className='bg-[#cad5ff] px-1 rounded text-sm absolute top-0 right-0 h-full items-center'>20km</span></h1>
          <p className='text-sm w-full mt-3 text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quibusdam laudantium suscipit fugit sint rerum cum veritatis numquam! Tenetur, fugiat recusandae? Dicta nam ab provident.</p>
        </div>
      </div>
      <div className='w-64 sm:mt-24 min-h-32 bg-[#cad5ff] rounded-xl p-3 flex flex-col items-center justify-start'>
        <img src={worked2} className='rounded-lg h-40 w-full object-cover object-center'/>
        <div className='w-full mt-3 text-zinc-800'>
          <h1 className='w-full flex items-center justify-between text-[17px] leading-none font-bold flex-nowrap relative overflow-hidden'>Motherboard problem <span className='bg-[#cad5ff] px-1 rounded text-sm absolute top-0 right-0 h-full items-center'>20km</span></h1>
          <p className='text-sm w-full mt-3 text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quibusdam laudantium suscipit fugit sint rerum cum veritatis numquam! Tenetur, fugiat recusandae? Dicta nam ab provident.</p>
        </div>
      </div>
      <div className='w-64 sm:mt-10 min-h-32 bg-[#cad5ff] rounded-xl p-3 flex flex-col items-center justify-start'>
        <img src={worked3} className='rounded-lg h-40 w-full object-cover object-center'/>
        <div className='w-full mt-3 text-zinc-800'>
          <h1 className='w-full flex items-center justify-between text-[17px] leading-none font-bold flex-nowrap relative overflow-hidden'>Motherboard problem <span className='bg-[#cad5ff] px-1 rounded text-sm absolute top-0 right-0 h-full items-center'>20km</span></h1>
          <p className='text-sm w-full mt-3 text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quibusdam laudantium suscipit fugit sint rerum cum veritatis numquam! Tenetur, fugiat recusandae? Dicta nam ab provident.</p>
        </div>
      </div>
      <div className='w-64 sm:-mt-20 min-h-32 bg-[#cad5ff] rounded-xl p-3 flex flex-col items-center justify-start'>
        <img src={worked4} className='rounded-lg h-40 w-full object-cover object-center'/>
        <div className='w-full mt-3 text-zinc-800'>
          <h1 className='w-full flex items-center justify-between text-[17px] leading-none font-bold flex-nowrap relative overflow-hidden'>Motherboard problem <span className='bg-[#cad5ff] px-1 rounded text-sm absolute top-0 right-0 h-full items-center'>20km</span></h1>
          <p className='text-sm w-full mt-3 text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quibusdam laudantium suscipit fugit sint rerum cum veritatis numquam! Tenetur, fugiat recusandae? Dicta nam ab provident.</p>
        </div>
      </div>
    </div>
  )
}

export default Works