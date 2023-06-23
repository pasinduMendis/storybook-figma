import React, { useState } from 'react'
import LogoComponent from '../../components/logo'
import HeaderTopic from '../../components/headerTopic'
import ButtonComponent from '../../components/button/button'

const Mypage = ({rootStyles,hexToRgb}) => {
    const handleClick=()=>{
        setmsg("button working")
    }
  
    const [msg, setmsg] = useState("")

  return (
    <div className='p-5' style={{width:"100vw",minHeight:'100vh',background:'var(--global-main-background)'}}>
    <div className='row'>
        <div className='col-12'>
        <LogoComponent label={"MY LOGO"} propStyles={{
        background:hexToRgb(rootStyles.getPropertyValue('--global-logo-background-color').trim(),rootStyles.getPropertyValue('--global-logo-background-opacity').trim()),
        color:'var(--global-logo-font-color)',
        borderRadius:'var(--global-logo-radius)',
        borderWidth:'var(--global-logo-border-width)',
        borderColor:'var(--global-logo-border-color)',
        width:"25vw",
        fontWeight:'var(--global-logo-font-weight)',
        fontSize:'var(--global-logo-font-size)',
        }} />
        </div>

        <div className='col-12 d-flex justify-content-center my-5'>
        <HeaderTopic label={"MY HEADER"} propStyles={{
          fontWeight:'var(--global-header-weight)',
          fontSize:'var(--global-header-font-size)',
          color:'var(--global-header-text-color)'
        }}/>
        </div>
        
        <div className='col-12 d-flex justify-content-center'>
        <ButtonComponent  handleClick={()=>handleClick()} propStyles={{
        borderRadius:'var(--global-button-radius)',
        borderWidth:'var(--global-button-border-width)',
        borderColor:'var(--global-button-border-color)',width:"25vw",
        fontWeight:'var(--global-button-font-weight)',
        fontSize:'var(--global-button-font-size)',
        background:'var(--global-button-background)'
        }} label="GET STARTED"/>
        </div>

        {msg && <div className='col-12 d-flex justify-content-center'>{msg}</div>}

    </div>
    </div>
  )
}

export default Mypage