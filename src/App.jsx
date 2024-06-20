import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import Topimg from '/topimg.jpg'
import Topimg2 from '/topimg2.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-[100vw] text-zinc-800 relative h-[100vh] overflow-hidden overflow-y-scroll'>
      <div className='w-full overflow-hidde h-[100vh] absolute top-0 left-0'>
      <div className='bg-[#DBE2FF] overflow-hidden absolute z-[10] bottom-20 sm:bottom-[30vh] sm:left-0 -left-32 rotate-12 rounded-xl sm:rounded-[3rem] sm:w-full w-[150vw] h-[100vh]'>
        <img src={Topimg} className='size-[600px] absolute bottom-0 right-0 object-cover' />
        <img src={Topimg2} className='size-[300px] absolute bottom-[14vh] hidden sm:block rounded-full animate-pulse -left-[5vw] sm:left-[0vw] object-cover' />
        </div>
      </div>
      <div className='z-[50] relative'>
        <Nav/>
        <Home/>
        </div>
    </div>
  )
}

export default App
