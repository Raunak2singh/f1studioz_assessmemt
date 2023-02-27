import React from 'react'
import "./Body.scss"

function CustomBody({children}) {
  return (
    <div className='Body'>
      {children}
    </div>
  )
}

export default CustomBody