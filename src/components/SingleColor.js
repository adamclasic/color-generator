import React from 'react'
// import rgbToHex from 'values'

const SingleColor = ({rgb, weight, type}) => {
  console.log(rgb);
  // var gColor = this.props.gColor
  let rgbValue = rgb.join(',');
  // console.log('----below thi is gColor');
  // console.log('----ontop thi is gColor');
  return (
    <div className='singleColor' style={{backgroundColor: `rgb(${rgbValue})`}}>
      <p style={type=="tint" ? {color: 'black'} : {color: 'white'}}>{`%${weight}`}</p>
      <p style={type=="tint" ? {color: 'black'} : {color: 'white'}}>{`rgb(${rgbValue})`}</p>
    </div>
  )
}

export default SingleColor
