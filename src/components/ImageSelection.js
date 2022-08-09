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
        <img className='w-60 h-60 hover:opacity-50' src={image} onClick={handlSelection} />
    )
}

export default function ImageSelection(props) {

    const { setSelectedImage, setGameMessage } = props;
    
  return (
    <div className='flex flex-wrap w-500 mx-4'>
        {arrayOfImages.map((image, index) => {
            return <SelectionOption setGameMessage={setGameMessage} setSelectedImage={setSelectedImage} image={image} index={index} />
        })}
        
    </div>
  )
}
