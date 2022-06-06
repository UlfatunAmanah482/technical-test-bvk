import React, { useState } from 'react'
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar(props) {
  const [visible, setVisible] = useState(false)
  return (
    <div className='flex flex-wrap lg:flex-nowrap flex-row lg:flex-row-reverse justify-between items-center p-[4%]'>
      <button className="inline-flex lg:hidden text-4xl z-40" onClick={() => setVisible(!visible)}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className='flex bg-white rounded-lg items-center p-2'>
        <input type="text" placeholder="Search..." className='text-[#265b5e] bg-white lg:text-sm text-xs font-medium rounded-lg focus:outline-none' onChange={(e) => props.setSearch(e.target.value)} />
        <div>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
      <div className={visible ? "flex lg:grow w-full lg:w-auto" : "hidden lg:flex lg:grow w-full lg:w-auto"}>
        <ul className='flex flex-col lg:flex-row items-center'>
          <li className='lg:px-5 px-0 lg:py-0 py-3'>
            <button className='bg-white border rounded-full p-3 lg:w-[50px] w-[40px] lg:h-[50px] h-[40px] hover:bg-gray-200'>
              <img src="/images/cat.png" alt="cat" className='w-full h-full' />
            </button>
          </li>
          <li className='lg:px-5 px-0 lg:py-0 py-3'>
            <button className='bg-white border rounded-full p-3 lg:w-[50px] w-[40px] lg:h-[50px] h-[40px] hover:bg-gray-200'>
              <img src="/images/bird.png" alt="bird" className='w-full h-full' />
            </button>
          </li>
          <li className='lg:px-5 px-0 lg:py-0 py-3'>
            <button className='bg-white border rounded-full p-3 lg:w-[50px] w-[40px] lg:h-[50px] h-[40px] hover:bg-gray-200'>
              <img src="/images/rabbit.png" alt="rabbit" className='w-full h-full' />
            </button>
          </li>
          <li className='lg:px-5 px-0 lg:py-0 py-3'>
            <button className='bg-white border rounded-full p-3 lg:w-[50px] w-[40px] lg:h-[50px] h-[40px] hover:bg-gray-200'>
              <img src="/images/duck.png" alt="duck" className='w-full h-full' />
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}
