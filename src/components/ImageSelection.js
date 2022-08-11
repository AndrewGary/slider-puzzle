import React from 'react'
import { arrayOfImages } from '../utils/utils'

const SelectionOption = props => {

    const classNames = '';

    const {image, index, setSelectedImage, setGameMessage} = props;

    const handlSelection = e => {
        console.log('index: ', index);
        setSelectedImage(index);
        setGameMessage('');
    }

    return (
        <img className='sm:w-150 sm:h-150 w-60 h-60 hover:opacity-50' src={image} onClick={handlSelection} />
    )
}

export default function ImageSelection(props) {

    const { setSelectedImage, setGameMessage } = props;
    
  return (
    <div className='sm:w-400 sm:justify-evenly flex flex-wrap w-500 mx-4'>
    {/* // <div className='sm:w-400 sm:justify-evenly flex flex-wrap w-500 mx-4'> */}
        {arrayOfImages.map((image, index) => {
            return <SelectionOption setGameMessage={setGameMessage} setSelectedImage={setSelectedImage} image={image} index={index} />
        })}
        
    </div>
  )
}
