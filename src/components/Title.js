import React from 'react'

export default function Title(props) {
    const { selectedImage } = props;
    console.log('title selectedImage: ', selectedImage);
  return (
    <div>
        <h1 className='text-9xl border-b border-black'>Slider Puzzle</h1>
        {selectedImage !== null ? '' : <h2 className='flex justify-center text-3xl'>Select an image to get started</h2>}
    </div>
  )
}
