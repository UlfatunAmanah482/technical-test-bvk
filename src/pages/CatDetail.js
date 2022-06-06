import React from 'react'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function CatDetail() {
  const cat = useSelector(state => state.cats.cat)
  const navigate = useNavigate()
  const handleBack = () => {
    navigate("/")
  }

  return (
    <div className='h-screen bg-main flex items-center'>
      <div className='container mx-auto p-[8%] grid sm:grid-cols-2 grid-cols-none sm:grid-rows-none grid-rows-2 gap-4 items-center'>
        <div>
          <button onClick={handleBack}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <img src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`} alt={cat.alt_names} className='h-[400px] w-[600px]' />
        </div>
        <div className='px-4'>
          <p className='md:text-base text-sm text-[#265b5e] font-bold underline'>{cat.name}</p>
          <p className='md:text-xs text-[10px] text-[#265b5e] pb-2 italic'>{cat.origin}</p>
          <b className='md:text-sm text-xs text-[#265b5e]'>Description</b>
          <p className='md:text-xs text-[10px] text-[#265b5e] pb-2'>{cat.description}</p>
          <b className='md:text-sm text-xs text-[#265b5e]'>Temperament</b>
          <p className='md:text-xs text-[10px] text-[#265b5e]'>{cat.temperament}</p>
        </div>
      </div>
    </div>
  )
}
