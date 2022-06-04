import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function CatDetail() {
  // const [cats, setCats] = useState("")
  // useEffect(() => {
  //   axios.get("https://api.thecatapi.com/v1/breeds").then((res) => {
  //     setCats(res.data)
  //     console.log("data: ", res.data);
  //   })
  // }, [])
  return (
    <div className='container mx-auto p-[8%]'>
      <div className='grid grid-cols-2 gap-4 items-center'>
        <div>
          {/* <img src="" alt="" /> */}
          Hello
        </div>
      </div>
    </div>
  )
}
