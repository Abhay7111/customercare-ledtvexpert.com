import React, { useEffect } from 'react'

function Gallery({ images }) {

  return (
    <div className={` w-80 h-60 rounded-xl `}>
     <img src={images.url} className={`${images.main} rounded-xl cursor-pointer relative h-60 flex items-center justify-center w-80 object-cover`}/>
     <div className={` ${images.style} z-30 hidden sm:absolute sm:backdrop-blur rounded-xl overflow-hidden relative -top-60 left-0 sm:top-1/2 sm:left-1/2 sm:translate-x-[-50%] sm:translate-y-[-50%] midd w-full h-[60vh] sm:w-[80vw] sm:h-[65vh]`}>
          <div className=' flex flex-col gap-5 sm:flex cursor-not-allowed sm:flex-row items-center h-full justify-start'>
               <div className=' w-full sm:w-1/2 h-full'>
                    <img src={images.url} className='w-full rounded-xl h-full object-cover object-center' />
               </div>
               <div className='w-full sm:w-1/2 h-full bg-[#DBE2FF] overflow-y-auto py-2 px-5 rounded-xl'>
                    <h1 className='w-full text-2xl font-bold relative'>{images.name} <span className='absolute translate-y-[-50%] text-base font-medium backdrop-blur-3xl top-1/2 right-0'>{images.range}</span></h1>
                    <p className='mt-1 text-base sm:text-sm mb-5'>{images.disc}</p>
                    <div className='flex gap-2 items-center justify-center w-full'>
                    <a href="tel:+918421119417" className=' px-4 rounded-md text-sm font-medium hover:text-[1rem] transition-all hover:text-green-600 py-1 bg-zinc-100 border border-zinc-400'><i class="ri-phone-line"></i> Call us</a>
                    <a href="https://wa.me/+918421119417?text=I%20have%20problem%20with%20my%20LED%20TV" className=' px-4 rounded-md text-sm font-medium hover:text-[1rem] transition-all hover:text-green-600 py-1 bg-zinc-100 border border-zinc-400'><i class="ri-whatsapp-line"></i> On whatsapp</a>
                    </div>
                    </div>
          </div>
     </div>
    </div>
  )
}

export default Gallery