import React from 'react'
import { images } from '../../constants'
import Image from 'next/image'

const ExpandingCards = () => {
  return (
    <div className="container mx-auto p-10">
  <h1 className='text-4xl text-center mb-4'>Expanding Cards</h1>
    <div className='flex flex-wrap'>
    {images.map((image)=> (
      <Image
      className='mx-2'
      height={100}
      key={image.id} 
      src={image.image} 
      alt={image.name} 
      />
    ))}
    </div>
</div>
  )
}

export default ExpandingCards