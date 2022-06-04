import React from 'react'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faCat, faDove } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
    <div className='flex justify-between items-center py-[4%]'>
      <h1>Welcome</h1>
      {/* <div className='flex items-center'> */}
        <ul className='flex flex-row items-center'>
          <li>
            <button className='bg-white border rounded-full border-gray-400 p-3 w-[50px] h-[50px]'>
              <img src="/images/cat.png" alt="cat" className='w-full h-full' />
            </button>
          </li>
          <li>
            <button className='bg-white border rounded-full border-gray-400 p-3 w-[50px] h-[50px]'>
              <img src="/images/bird.png" alt="bird" className='w-full h-full' />
            </button>
          </li>
          <li>
            <button className='bg-white border rounded-full border-gray-400 p-3 w-[50px] h-[50px]'>
              <img src="/images/rabbit.png" alt="rabbit" className='w-full h-full' />
            </button>
          </li>
          <li>
            <button className='bg-white border rounded-full border-gray-400 p-3 w-[50px] h-[50px]'>
              <img src="/images/duck.png" alt="duck" className='w-full h-full' />
            </button>
          </li>
        </ul>
      {/* </div> */}
    </div>
  )
}
