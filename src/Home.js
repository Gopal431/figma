import React from 'react'

function Home() {
  return (
    <div>
        <h className=" font-bold text-2xl ">Find the right Tyre</h>
        <div className='space-x-3 my-4 '>
            <button className='hover:bg-gray-600 w-20 cursor-pointer h-10 font-semibold hover:text-white border-2 border-gray-500 rounded-md'>Trucks</button>
            <button className='hover:bg-gray-600 w-20 cursor-pointer h-10 font-semibold hover:text-white border-2 border-gray-500 rounded-md'>Buses</button>
            <button className='hover:bg-gray-600 w-40 cursor-pointer h-10 font-semibold hover:text-white border-2 border-gray-500 rounded-md'>By Vechile Number</button>
        </div>
        <div className='space-x-3 overflow-hidden flex flex-row '>
            <button className='hover:text-red-600 whitespace-nowrap  text-lg text-gray-400 pb-2 border-b-2 hover:border-b-4 border-gray-300 hover:border-red-600'>Bu Size</button>
            <button className='hover:text-red-600 whitespace-nowrap  text-lg text-gray-400 pb-2 border-b-2 hover:border-b-4 border-gray-300 hover:border-red-600'>Pickup Tyres</button>
            <button className='hover:text-red-600 whitespace-nowrap  text-lg text-gray-400 pb-2 border-b-2 hover:border-b-4 border-gray-300 hover:border-red-600'>Bus Tyres brand</button>
            <button className='hover:text-red-600 whitespace-nowrap   text-lg text-gray-400 pb-2 border-b-2 hover:border-b-4 border-gray-300 hover:border-red-600'>3 Wheelers</button>
        </div>
      <div className='border-b-2 w-full bg-gray-300  h-1 -mt-0.5'></div>
        <div>
            <select className='border-2 rounded-md h-10 my-5  py-1 text-xl  text-gray-400 w-full'>
                <option className='border-2 rounded-md h-14  text-left py-1 text-xl  text-gray-400'>By Select Vechicle </option>
                <option>one</option>
                <option>Two </option>
                <option>Three</option>
            </select>
            <select className='border-2 rounded-md h-14 my-5 text-center py-1 text-xl text-gray-400 w-full'>
                <option className='border-2 rounded-md h-14 my-5 text-left mx-5 py-1 text-xl text-gray-400'>Variant</option>
                <option>one</option>
                <option>Two </option>
                <option>Three</option>
            </select>
            <button className='border-2 rounded-md h-12  text-center py-1 text-xl text-white bg-red-600 w-full'>search</button>
        </div>
    </div>
  )
}

export default Home