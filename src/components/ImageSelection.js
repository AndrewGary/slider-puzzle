import React from 'react'
import { arrayOfImages } from '../utils/utils'

const SelectionOption = props => {

    const classNames = '';

    const {image, index, setSelectedImage} = props;

    const handlSelection = e => {
        console.log('index: ', index);
        setSelectedImage(index);
    }

    return (
        <img className=' w-60 h-60' src={image} onClick={handlSelection} />
    )
}

export default function ImageSelection(props) {

    const { setSelectedImage } = props;
    
  return (
    <div className='flex flex-wrap w-500 '>
        {arrayOfImages.map((image, index) => {
            return <SelectionOption setSelectedImage={setSelectedImage} image={image} index={index} />
        })}
        
    </div>
  )
}
