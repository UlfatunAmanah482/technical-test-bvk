import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Detail from './Detail'

export default function Card(props) {
  const [dataById, setDataById] = useState("")
  const [detail, setDetail] = useState(false)

  const handleDetail = (e) => {
    console.log("e: ", e.target.id);
    axios.get(`https://api.thecatapi.com/v1/breeds/${e.target.id}`).then(res => {
      setDataById(res.data)
      console.log(res.data);
    })
    setDetail(true)
  }

  const handleExpand = () => {
    console.log('diklik');
  }

  useEffect(() => {
    console.log("dataById:", dataById);
  }, [dataById])

  return (
    <section>
      {detail && <Detail imageName={dataById.reference_image_id} altName={dataById.alt_names} name={dataById.name} origin={dataById.origin} description={dataById.description} temperament={dataById.temperament} handleBack={() => setDetail(false)} handleExpand={handleExpand} />}
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
