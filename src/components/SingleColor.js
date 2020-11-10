import { logDOM } from '@testing-library/react';
import React, {useState} from 'react'
// import rgbToHex from 'values'

const SingleColor = ({rgb, weight, type}) => {
const [msg, setMsg] = useState(false)
  // console.log(rgb);
  // var gColor = this.props.gColor
  let rgbValue = rgb.join(',');
  // console.log('----below thi is gColor');
  // console.log('----ontop thi is gColor');
  const clickHandler = ()=> {
    setMsg(true)
    navigator.clipboard.writeText(`rgb(${rgbValue})`)
    setTimeout(() => {
      setMsg(false)
    }, 3000)
    
  }
  return (
    <div onClick={clickHandler} className='singleColor' style={{backgroundColor: `rgb(${rgbValue})`}}>
      <p style={type==="tint" ? {color: 'black'} : {color: 'white'}}>{`%${weight}`}</p>
      <p style={type==="tint" ? {color: 'black'} : {color: 'white'}}>{`rgb(${rgbValue})`}</p>
      {msg ? <p>copied to clipboard</p> : <p></p>}
      
    </div>
  )
}

export default SingleColor
