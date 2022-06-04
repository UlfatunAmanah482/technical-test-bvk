import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function Detail(props) {
  return (
    <div className='h-screen w-full fixed flex justify-center items-center bg-cyan-900 bg-opacity-50 z-10 left-0 top-0'>
      <div className='bg-[#f4f4f4] rounded-xl w-1/3 px-5 pb-5 absolute'>
        <div className="flex items-center justify-between my-2">
          <button onClick={props.handleBack}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button onClick={props.handleExpand}>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </button>
        </div>
        <img src={`https://cdn2.thecatapi.com/images/${props.imageName}.jpg`} alt={props.altName} className='rounded-tr-xl rounded-bl-xl max-h-80 w-full' />
        <div className='rounded-tl-xl p-5 relative -top-[4%] z-10'>
          <p className='text-sm text-[#265b5e] font-bold'>{props.name}</p>
          <p className='text-xs text-[#265b5e] pb-2'>{props.origin}</p>
          <h3 className='text-[#265b5e] font-bold'>Description</h3>
          <p className='text-xs text-[#265b5e] pb-2'>{props.description}</p>
          <h3 className='text-[#265b5e] font-bold'>Temperament</h3>
          <p className='text-xs text-[#265b5e]'>{props.temperament}</p>
        </div>
      </div>
    </div>
  )
}
