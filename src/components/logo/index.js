import React from 'react'

const LogoComponent= ({propStyles={},label}) => {
    const style={...propStyles}
  return (

    <div className="p-2 text-center" style={{ ...style,borderStyle: "solid" }} data-testid="logo-test">
  {label}
</div>
  )
}

export default LogoComponent
