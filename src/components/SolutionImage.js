import React from 'react'

export default function SolutionImage(props) {
    const { image, setSelectedImage } = props;
  return (
    <div className='flex flex-col justify-center items-center'>
        <h2 className=' text-4xl'>Solution</h2>
        <img className=' w-80 h-80' src={image} />
        <button onClick={() => {
            setSelectedImage(null);
        }}>
            Choose Another Image
        </button>
    </div>
  )

}
