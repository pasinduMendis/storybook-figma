import React from 'react'
import '../../css/_variables.css'
import {Button} from 'react-bootstrap'

const ButtonComponent = ({ label,size = "md", handleClick,propStyles={},backgroundColor}) =>{
    let scale = 1
    if (size === "sm") scale = 0.75
    if (size === "md") scale = 1.00
    if (size === "lg") scale = 1.5
    const style = {
      background:backgroundColor,
        ...propStyles,
        padding: `${scale * 0.5}rem ${scale * 1}rem`,
    }


    return (
      <>
      <Button onClick={()=>handleClick()} style={style}>
        {label}
      </Button>
      </>
    )
  }

export default ButtonComponent