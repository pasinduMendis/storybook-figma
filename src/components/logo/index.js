import React from 'react'

const LogoComponent= ({propStyle,label}) => {
    const style={...propStyle}
  return (

    <div >
        {label}
    </div>
  )
}

export default LogoComponent
