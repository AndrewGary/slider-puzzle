import React from 'react'

export default function SolutionImage(props) {
    const { image, setSelectedImage } = props;
  return (
    <div className='sm:w-150 sm:h-150 flex flex-col justify-center items-center mx-4'>
        <h2 className=' text-4xl'>Solution</h2>
        <img className=' w-80 h-80' src={image} />
    </div>
  )

}
