import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getDataById } from '../redux/actions/cats'
import Detail from './Detail'

export default function Card(props) {
  const [detail, setDetail] = useState(false)

  const dispatch = useDispatch();
  const cat = useSelector(state => state.cats.cat)

  const navigate = useNavigate()

  const handleDetail = (e) => {
    console.log("e: ", e.target.id);
    dispatch(
      getDataById(e.target.id)
    )
    setDetail(true)
  }

  const handleExpand = () => {
    navigate("/cat-detail")
  }

  return (
    <section>
      {detail && <Detail imageName={cat.reference_image_id} altName={cat.alt_names} name={cat.name} origin={cat.origin} description={cat.description} temperament={cat.temperament} handleBack={() => setDetail(false)} handleExpand={handleExpand} />}
      <div className='flex flex-col justify-center bg-white rounded-xl w-[220px] h-[280px] p-3 overflow-hidden'>
        <img src={`https://cdn2.thecatapi.com/images/${props.imageName}.jpg`} alt={props.altName} className='w-full h-full overflow-hidden rounded-xl' />
        {/* <img src={props.imageName} alt={props.altName} className='w-full h-full overflow-hidden' /> */}
        <div className='grid grid-cols-2 py-3 items-center'>
          <div>
            <p className='text-sm text-[#265b5e] font-bold'>{props.name}</p>
            <p className='text-xs text-[#265b5e]'>{props.origin}</p>
          </div>
          <div className='flex flex-col items-end'>
            <button className='hover:bg-red-600'>
              {/* <img src="/images/love.png" alt="love" /> */}
              <FontAwesomeIcon icon={faHeart} />
            </button>
            <button className='text-xs bg-[#104341] hover:bg-[#265b5e] text-white rounded-md px-2 py-1 my-1' onClick={handleDetail} id={props.id}>Read More</button>
          </div>
        </div>
      </div>
    </section>
  )
}
