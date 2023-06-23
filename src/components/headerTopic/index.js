import React from 'react'

const HeaderTopic = ({label,propStyles={}}) => {
    const style={...propStyles}
  return (
    <div style={style} data-testid="headerTopic-test">{label}</div>
  )
}

export default HeaderTopic