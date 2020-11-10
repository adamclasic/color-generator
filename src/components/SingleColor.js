import React from 'react'

const SingleColor = (gColor) => {
  // var gColor = this.props.gColor
  console.log('----below thi is gColor');
  console.log(gColor);
  console.log('----ontop thi is gColor');
  return (
    <div className='singleColor' style={{backgroundColor: `rgb(${gColor.gColor[0]},${gColor.gColor[0]},${gColor.gColor[0]})`}}>
      x
    </div>
  )
}

export default SingleColor
