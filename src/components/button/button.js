import React from 'react'
import '../../css/_variables.css'
import {Button} from 'react-bootstrap'

const ButtonComponent = ({ label,size = "md", handleClick,propStyles={}}) =>{
    let scale = 1
    if (size === "sm") scale = 0.75
    if (size === "md") scale = 1.00
    if (size === "lg") scale = 1.5
    const style = {
        ...propStyles,
      padding: `${scale * 0.5}rem ${scale * 1}rem`,
      border: "none",
    }

    return (
      <Button onClick={()=>handleClick()} style={style}>
        {label}
      </Button>
    )
  }

export default ButtonComponent