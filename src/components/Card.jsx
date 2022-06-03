import React from 'react'

export default function Card(props) {
  return (
    <div className='flex flex-col items-center justify-center bg-white rounded-xl w-[400px] h-[400px]'>
      <img src={`https://cdn2.thecatapi.com/images/${props.imageName}.jpg`} alt={props.altName} className='w-[300px] h-[300px]' />
      <h1>Meyow</h1>
      <h2>Indonesia</h2>
    </div>
  )
}
