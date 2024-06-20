import React, { useEffect } from 'react';
import Works from './works';
import Ourcompany from './Ourcompany';
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Gallery from './Gallery';
import image1 from '/topimg.jpg'
import image2 from '/topimg2.jpg'
import image3 from '/topimg3.jpg'
import image4 from '/topimg4.jpg'
import image5 from '/topimg5.jpg'
import Clintsays from './Clintsays';

function Home() {

  useEffect(() => {
    const main1 = document.querySelector(".main1");
    const main2 = document.querySelector(".main2");
    const main3 = document.querySelector(".main3");
    const main4 = document.querySelector(".main4");
    const main5 = document.querySelector(".main5");
    const main6 = document.querySelector(".main6");

    const img1 = document.querySelector(".img1");
    const img2 = document.querySelector(".img2");
    const img3 = document.querySelector(".img3");
    const img4 = document.querySelector(".img4");
    const img5 = document.querySelector(".img5");
    const img6 = document.querySelector(".img6");
    
    main1.addEventListener("click", ()=>{
      img1.style.display = "block"
      img2.style.display = "none"
      img3.style.display = "none"
      img4.style.display = "none"
      img5.style.display = "none"
      img6.style.display = "none"
    }, (1))
    main2.addEventListener("click", ()=>{
      img2.style.display = "block"
      img1.style.display = "none"
      img3.style.display = "none"
      img4.style.display = "none"
      img5.style.display = "none"
      img6.style.display = "none"
    }, (2))
    main3.addEventListener("click", ()=>{
      img3.style.display = "block"
      img2.style.display = "none"
      img1.style.display = "none"
      img4.style.display = "none"
      img5.style.display = "none"
      img6.style.display = "none"
    }, (3))
    main4.addEventListener("click", ()=>{
      img4.style.display = "block"
      img3.style.display = "none"
      img2.style.display = "none"
      img1.style.display = "none"
      img5.style.display = "none"
      img6.style.display = "none"
    }, (4))
    main5.addEventListener("click", ()=>{
      img5.style.display = "block"
      img4.style.display = "none"
      img3.style.display = "none"
      img2.style.display = "none"
      img1.style.display = "none"
      img6.style.display = "none"
    }, (5))
    main6.addEventListener("click", ()=>{
      img6.style.display = "block"
      img5.style.display = "none"
      img4.style.display = "none"
      img3.style.display = "none"
      img2.style.display = "none"
      img1.style.display = "none"
    }, (6))


    img1.addEventListener("click", (e)=>{
      img1.style.display = "none"
      img2.style.display = "none"
      img3.style.display = "none"
      img4.style.display = "none"
      img5.style.display = "none"
      img6.style.display = "none"
    })
    img2.addEventListener("click", (e)=>{
      img1.style.display = "none"
      img2.style.display = "none"
      img3.style.display = "none"
      img4.style.display = "none"
      img5.style.display = "none"
      img6.style.display = "none"
    })
    img3.addEventListener("click", (e)=>{
      img1.style.display = "none"
      img2.style.display = "none"
      img3.style.display = "none"
      img4.style.display = "none"
      img5.style.display = "none"
      img6.style.display = "none"
    })
    img4.addEventListener("click", (e)=>{
      img1.style.display = "none"
      img2.style.display = "none"
      img3.style.display = "none"
      img4.style.display = "none"
      img5.style.display = "none"
      img6.style.display = "none"
    })
    img5.addEventListener("click", (e)=>{
      img1.style.display = "none"
      img2.style.display = "none"
      img3.style.display = "none"
      img4.style.display = "none"
      img5.style.display = "none"
      img6.style.display = "none"
    })
    img6.addEventListener("click", (e)=>{
      img1.style.display = "none"
      img2.style.display = "none"
      img3.style.display = "none"
      img4.style.display = "none"
      img5.style.display = "none"
      img6.style.display = "none"
    })
})

  const ourcompanydata = [
    {
      name:{
        name:'ledtvexpert.in',
        style:'',
      },
      img:{
        img:'',
        style:'hidden',
      },
    },
    {
      name:{
        name:'gaama.top',
        style:'',
      },
      img:{
        img:'',
        style:'hidden',
      },
    },
  ];
  const images = [
    {
         name:'Pune city',
         range:'5km',
         disc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident a obcaecati doloribus quis reprehenderit voluptates odio quidem? Reprehenderit in unde quae obcaecati, cupiditate totam ullam quidem perspiciatis iusto molestiae vero velit non cumque aliquid nostrum ipsum mollitia repellendus neque voluptates! Quos sint, beatae exercitationem recusandae odit maiores, reprehenderit ab qui voluptates fugit, ex ullam nisi quidem quam inventore quas! Culpa!',
         main:'main1',
         url:image1,
         style:'img1',
    },
    {
         name:'Pune city',
         range:'5km',
         disc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident a obcaecati doloribus quis reprehenderit voluptates odio quidem? Reprehenderit in unde quae obcaecati, cupiditate totam ullam quidem perspiciatis iusto molestiae vero velit non cumque aliquid nostrum ipsum mollitia repellendus neque voluptates! Quos sint, beatae exercitationem recusandae odit maiores, reprehenderit ab qui voluptates fugit, ex ullam nisi quidem quam inventore quas! Culpa!',
         main:'main2',
         url:image2,
         style:'img2',
    },
    {
         name:'Pune city',
         range:'5km',
         disc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident a obcaecati doloribus quis reprehenderit voluptates odio quidem? Reprehenderit in unde quae obcaecati, cupiditate totam ullam quidem perspiciatis iusto molestiae vero velit non cumque aliquid nostrum ipsum mollitia repellendus neque voluptates! Quos sint, beatae exercitationem recusandae odit maiores, reprehenderit ab qui voluptates fugit, ex ullam nisi quidem quam inventore quas! Culpa!',
         main:'main3',
         url:image3,
         style:'img3',
    },
    {
         name:'Pune city',
         range:'5km',
         disc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident a obcaecati doloribus quis reprehenderit voluptates odio quidem? Reprehenderit in unde quae obcaecati, cupiditate totam ullam quidem perspiciatis iusto molestiae vero velit non cumque aliquid nostrum ipsum mollitia repellendus neque voluptates! Quos sint, beatae exercitationem recusandae odit maiores, reprehenderit ab qui voluptates fugit, ex ullam nisi quidem quam inventore quas! Culpa!',
         main:'main4',
         url:image2,
         style:'img4',
    },
    {
         name:'Pune city',
         range:'5km',
         disc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident a obcaecati doloribus quis reprehenderit voluptates odio quidem? Reprehenderit in unde quae obcaecati, cupiditate totam ullam quidem perspiciatis iusto molestiae vero velit non cumque aliquid nostrum ipsum mollitia repellendus neque voluptates! Quos sint, beatae exercitationem recusandae odit maiores, reprehenderit ab qui voluptates fugit, ex ullam nisi quidem quam inventore quas! Culpa!',
         main:'main5',
         url:image3,
         style:'img5',
    },
    {
         name:'Pune city',
         range:'5km',
         disc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident a obcaecati doloribus quis reprehenderit voluptates odio quidem? Reprehenderit in unde quae obcaecati, cupiditate totam ullam quidem perspiciatis iusto molestiae vero velit non cumque aliquid nostrum ipsum mollitia repellendus neque voluptates! Quos sint, beatae exercitationem recusandae odit maiores, reprehenderit ab qui voluptates fugit, ex ullam nisi quidem quam inventore quas! Culpa!',
         main:'main6',
         url:image5,
         style:'img6',
    },
]
  return (
     <div className='w-full items-center justify-center h-[100vh] z-[20]'>
     <div className='w-full h-[100vh] text-[#402E7A] flex flex-col sm:flex-row items-center justify-center gap-2 px-3'>
      <div className='sm:w-1/2 w-full h-96 sm:h-[500px] flex flex-col items-center justify-center'>
      <div className='bg-zinc-50/20 relative backdrop-blur-[6px] py-5 rounded-3xl'>
      <h1 className='uppercase w-full text-center text-[#5938c5] sm:text-start text-7xl sm:text-[9vw] sm:px-5 font-bold'>Bissiness name</h1>
      <p className='px-14 mt-3 text-sm font-medium relative'><span className='text-xl font-bold'>WELCOME TO LEDTVEXPERT </span> <br />
      Are you trying to find a professional who can fix your LED TV the best way possible? <a href="#"> Then call us!</a></p>
      <div className='flex w-auto px-5 items-center justify-center gap-5 mt-5'>
        <a href="https://wa.me/+918421119417?text=I%20have%20problem%20with%20my%20LED%20TV" className='w-32 h-8 bg-[#DBE2FF] rounded-lg text-zinc-600 flex items-center justify-center gap-1 font-medium hover:text-[1.05rem] hover:text-[#F154EF] transition-all border border-zinc-400'><i class="ri-whatsapp-line"></i>Whatsapp</a>
        <a href="tel:+918421119417" className='w-32 h-8 bg-[#DBE2FF] rounded-lg text-zinc-600 flex items-center justify-center gap-1 font-medium hover:text-[1.05rem] hover:text-[#F154EF] transition-all border border-zinc-400'><i class="ri-phone-line"></i>Call now</a>
      </div>
      </div>
      </div>
      <div className='sm:w-1/2 w-full h-full'>
      </div>
     </div>
<div className='sm:py-5 px-5'>
<h1 className='px-5 text-3xl text-[#432b92] sm:mb-10 font-bold'>Featured on</h1>
     <div className='flex items-center text-[#5738be] justify-start flex-wrap'>
      {ourcompanydata.map((items, index) => (
        <Ourcompany ourcompanydata={items}/>
      ))}
     </div>
</div>
     <div>
      <Works/>
     </div>
     <h1 className='w-full text-center text-3xl font-bold pb-5 pt-10 text-[#402E7A]'>Gallery</h1>
     <div className='flex flex-col items-center'>
     <div className='w-full max-w-[1366px] mt-10 relative flex flex-wrap gap-5 items-center justify-center px-1 sm:px-10'>
      {images.map((items, index) => (
        <Gallery images={items}/>
      ))}
     </div>
     </div>
     <div className=' w-fullitems-center justify-center'>
      <div className='max-w-[1366px]'>
      <Clintsays/>
      </div>
     </div>
     </div>
  )
}

export default Home