import React, { useEffect, useState } from "react";
import wolf from "../Wolf.png";



const PhotoTest = () => {

    const [ base64String, setBase64String ] = useState('');
    const [ imageTiles, setImageTiles ] = useState([]);

    const encodeImageAsURL = image => {
        
        fetch(image)
        .then(resp => {
            return resp.blob();
        })
        .then(blob => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = function() {
                // console.log('RESULT: ', reader.result)
                setBase64String(reader.result);
            }
            reader.readAsDataURL(blob);

            // console.log('blob: ', blob);
            // encodeImageAsURL(blob);
        }))


        // const reader = new FileReader();
        // reader.onloadend = function() {
        //     console.log('RESULT: ', reader.result)
        // }
        // reader.readAsDataURL(image);
    }
    useEffect(() => {
        // console.log('base64String: ', base64String);

        var canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        parts = [],
        img = new Image();

    img.onload = split_4;

    function split_4() {
      var w2 = img.width / 2,
          h2 = img.height / 2;

      for(var i=0; i<4; i++) {
        var x = (-w2*i) % (w2*2),
            y = (h2*i)<=h2? 0 : -h2 ;

        canvas.width = w2;
        canvas.height = h2;

        ctx.drawImage(this, x, y, w2*2, h2*2);

        parts.push( canvas.toDataURL() );

        // for test div
        var slicedImage = document.createElement('img')
        slicedImage.src = parts[i];
      }

      setImageTiles(parts);

    }

    img.src = base64String;

    }, [base64String])

    useEffect(() => {
        console.log('Starting at top of useEffect');

        
        setBase64String(encodeImageAsURL(wolf));
        // base64String = encodeImageAsURL(wolf);
        // console.log('base64String: ', base64String)
    }, [])

    return (
        <div>
            {imageTiles.map(tile => {
                return <img src={tile} />
            })}
        </div>
    )
}

export default PhotoTest;

// let imageBase64 = null;


//   const toDataURL = url => fetch(url)
//   .then(response => response.blob())
//   .then(blob => new Promise((resolve, reject) => {
//     const reader = new FileReader()
//     reader.onloadend = () => resolve(reader.result)
//     reader.onerror = reject
//     reader.readAsDataURL(blob)

// var canvas = document.createElement("canvas"),
//   ctx = canvas.getContext("2d"),
//   parts = [],
//   img = new Image();

// img.onload = split_4;

// function split_4() {
//   var w2 = img.width / 2,
//     h2 = img.height / 2;

//   for (var i = 0; i < 4; i++) {
//     var x = (-w2 * i) % (w2 * 2),
//       y = h2 * i <= h2 ? 0 : -h2;

//     canvas.width = w2;
//     canvas.height = h2;

//     ctx.drawImage(this, x, y, w2 * 2, h2 * 2);

//     parts.push(canvas.toDataURL());

//     // for test div
//     // var slicedImage = document.createElement("img");
//     // slicedImage.src = parts[i];
//     // var div = document.getElementById("test");
//     // div.appendChild(slicedImage);
//   }

//   console.log(parts);
// }

// export default PhotoTest = () => {
//   return <div>PhotoTest</div>;
// };

// export default PhotoTest;

// // import React, { useState, useEffect } from "react";
// // import wolf from "../Wolf.png";

// // let imageBase64 = null;

// // const canvas = document.createElement("canvas"),
// //   ctx = canvas.getContext("2d"),
// //   parts = [],
// //   img = new Image();

// //   const toDataURL = url => fetch(url)
// //   .then(response => response.blob())
// //   .then(blob => new Promise((resolve, reject) => {
// //     const reader = new FileReader()
// //     reader.onloadend = () => resolve(reader.result)
// //     reader.onerror = reject
// //     reader.readAsDataURL(blob)
// //   }))

// // toDataURL(wolf)
// //   .then(dataUrl => {
// //     return dataUrl
// //     // console.log(imageBase64);
// //   })

// // const splitImage = () => {
// //   const tileWidth = img.width / 2;
// //   const tileHeight = img.height / 2;

// //   console.log()

// //   for (let i = 0; i < 4; i++) {
// //     let x = (-tileWidth * i) % (tileWidth * 2);
// //     let y = tileHeight * i <= tileHeight ? 0 : -tileHeight;

// //     console.log("x: ", x);
// //     console.log("y: ", y);

// //     canvas.width = tileWidth;
// //     canvas.height = tileHeight;

// //     ctx.drawImage(this, x, y, tileWidth*2, tileHeight*2)
// //     // console.log(canvas.toDataURL());

// //     parts.push(canvas.toDataURL() );
// //   }

// //   console.log('parts: ', parts);
// // };
// // img.src = imageBase64;
// // img.onload = splitImage();

// // splitImage();

// // export default function PhotoTest() {

// //     useEffect(() => {
// //         toDataURL(wolf);
// //         console.log()
// //     }, [])

// //   return <img src={wolf} />;
// // }
