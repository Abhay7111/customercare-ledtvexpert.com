import React from 'react'

function Ourcompany({ ourcompanydata }) {
  return (
    <div className='w-fit px-2 min-h-20 rounded-xl flex items-center justify-center'>
     <h1 className={` max-w-96 font-bold bg-black/20 sm:bg-green-500/10 sm:border-zinc-500 sm:border backdrop-blur-sm px-5 py-2 rounded-lg uppercase ${ourcompanydata.name.style}`}>{ourcompanydata.name.name}</h1>
     <img className={`w-72 ${ourcompanydata.img.style} ml-2 rounded-xl border-none h-20 backdrop-blur-sm sm:bg-red-400/10`} src={ourcompanydata.img.img} />
    </div>
  )
}

export default Ourcompany