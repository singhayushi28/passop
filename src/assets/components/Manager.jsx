import React from 'react'

const Manager = () => {
  return (
    <>
      <div class="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
     <div className ="myContainer">
    <h1 className= 'text-4x1 text font-bold text-center'>
    <span className= 'text-green-700'>&lt;</span>
    <span>Pass</span> 
    <span className ='text-green-700'>OP/&gt;</span>
    </h1>

     <p className = 'text-green-900 text-lg text-center'>Your Own Password Manager</p>
    <div className ="flex flex-col p-4 text-black gap-8 items-center">
    <input placeholder ='Enter website URL'className ='rounded-full border border-green-500 w-full p-4 py-1' type="text" name="" id="" /> 
    <div className ="flex w-full justify-between gap-8">
    <input className ='rounded-full border border-green-500 w-full p-4 py-1' type="text" name="" id="" /> 
    <input className ='rounded-full border border-green-500 w-full p-4 py-1' type="text" name="" id="" /> 
 
    
    
   </div>
   <button className = 'flex text-white justify-center items-center gap-2b  bg-green-600 hover:bg-green-500 rounded-full px-8 py-2 w-fit border-1 border-green-900'>
   <lord-icon
   src="https://cdn.lordicon.com/jgnvfzqg.json"
   trigger="hover">

   </lord-icon>
  Add Password</button>
    </div>
     

    </div>
    </>
  )
}

export default Manager

