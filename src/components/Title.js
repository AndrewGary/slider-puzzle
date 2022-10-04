import React from 'react'

export default function Title(props) {
    const { selectedImage } = props;
  return (
      <div>
        {<h1 className='sm:text-5xl flex justify-center text-9xl border-b border-black'>Slider Puzzle</h1>}
        {selectedImage !== null ? '' : <h2 className='sm:text-xl flex justify-center text-3xl'>Select an image to get started</h2>}
      </div>
  )
}
