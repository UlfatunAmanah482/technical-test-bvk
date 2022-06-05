import React from 'react'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faCat, faDove } from '@fortawesome/free-solid-svg-icons'

export default function Navbar(props) {
  return (
    <div className='flex justify-between items-center py-[4%]'>
      <h1 className='text-2xl font-bold text-[#265b5e]'>Welcome</h1>
      {/* <div className='flex items-center'> */}
        <ul className='flex flex-row items-center'>
          <li className='px-5'>
            <button className='bg-white border rounded-full border-gray-400 p-3 w-[50px] h-[50px]'>
              <img src="/images/cat.png" alt="cat" className='w-full h-full' />
            </button>
          </li>
          <li className='px-5'>
            <button className='bg-white border rounded-full border-gray-400 p-3 w-[50px] max-h-52h-[50px]'>
              <img src="/images/bird.png" alt="bird" className='w-full h-full' />
            </button>
          </li>
          <li className='px-5'>
            <button className='bg-white border rounded-full border-gray-400 p-3 w-[50px] h-[50px]'>
              <img src="/images/rabbit.png" alt="rabbit" className='w-full h-full' />
            </button>
          </li>
          <li className='px-5'>
            <button className='bg-white border rounded-full border-gray-400 p-3 w-[50px] h-[50px]'>
              <img src="/images/duck.png" alt="duck" className='w-full h-full' />
            </button>
          </li>
        </ul>
      {/* </div> */}
      <div>
        <input type="text" placeholder='search' onChange={(e) => props.setSearch(e.target.value)} />
      </div>
    </div>
  )
}
