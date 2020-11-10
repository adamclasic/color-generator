import React from 'react'

const SingleColor = (gColor) => {
  // var gColor = this.props.gColor
  console.log(gColor.gColor);
  return (
    <div className='singleColor' style={{backgroundColor: gColor.gColor}}>
      x
    </div>
  )
}

export default SingleColor
