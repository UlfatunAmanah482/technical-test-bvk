import React from 'react'
import { useSelector } from 'react-redux';

export default function CatDetail() {
  const cat = useSelector(state => state.cats.cat)

  return (
    <div className='container mx-auto p-[8%]'>
      <div className='grid grid-cols-2 gap-4 items-center'>
        <div>
          <img src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`} alt={cat.alt_names} />
        </div>
        <div>
          <p className='text-sm text-[#265b5e] font-bold'>{cat.name}</p>
          <p className='text-xs text-[#265b5e] pb-2'>{cat.origin}</p>
          <h3 className='text-[#265b5e] font-bold'>Description</h3>
          <p className='text-xs text-[#265b5e] pb-2'>{cat.description}</p>
          <h3 className='text-[#265b5e] font-bold'>Temperament</h3>
          <p className='text-xs text-[#265b5e]'>{cat.temperament}</p>
        </div>
      </div>
    </div>
  )
}
