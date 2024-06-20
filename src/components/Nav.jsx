import React, { useEffect } from 'react'

function Nav() {
  useEffect(() => {
    const menu = document.querySelector(".menu")
    const menuopen = document.querySelector(".menu-open")
    const menuclose = document.querySelector(".menu-close")
    const mheight = document.querySelector(".mheight")

    menuopen.addEventListener("click", () => {
      menuopen.style.display = "none"
      menuclose.style.display = "block"
      menu.style.display = "block"
      mheight.style.height = "auto"
    })
    menuclose.addEventListener("click", () => {
      menuopen.style.display = "block"
      menuclose.style.display = "none"
      menu.style.display = "none"
      mheight.style.height = "0px"
    })
  })
  return (
    <div className='w-full text-[#402E7A] z-[99] h-14 relative px-3 flex items-center justify-between rounded-lg gap-10'>
      <div className='leading-5 tracking-tighter font-extrabold sm:text-3xl sm:leading-6 text-center text-2xl uppercase'>gaa<br />ma.</div>
      <div className=' menu hidden backdrop-blur-[7px] bg-zinc-50/10 sm:border-none border border-zinc-500 absolute rounded-xl sm:bg-transparent transition-all right-3 top-full sm:top-0 sm:relative sm:block'>
      <div className='w-96 flex flex-col justify-center items-center h-0 mheight overflow-hidden sm:h-auto'>
        <ul className=' font-normal flex flex-col sm:flex sm:flex-row py-5 sm:py-0 items-center gap-3 justify-start'>
          <li className='hover:scale-[1.1] transition-transform font-medium hover:text-[#F154EF]'><a href="#">Home</a></li>
          <li className='hover:scale-[1.1] transition-transform font-medium hover:text-[#F154EF]'><a href="#">About</a></li>
          <li className='hover:scale-[1.1] transition-transform font-medium hover:text-[#F154EF]'><a href="#">My clints</a></li>
          <li className='hover:scale-[1.1] transition-transform font-medium hover:text-[#F154EF]'><a href="#">Projects</a></li>
        </ul>
      </div>
      </div>
        <div className='sm:hidden font-bold cursor-pointer w-9 h-8 flex items-center justify-center text-2xl rounded-md bg-zinc-800/20 hover:bg-zinc-800/40 overflow-hidden'><i class="ri-more-2-fill menu-open w-full h-full text-center"></i><i class="ri-close-fill w-full h-full text-center hidden menu-close"></i></div>
    </div>
  )
}

export default Nav