import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const linkStyle = {
        textDecoration:'none',
        color:'white',
        fontSize:'22px',
        margin:'30px'
    }
  return (
    <div style={{backgroundColor:'#202A44',color:'white',padding:'20px'}}>
      <h1 style={{fontSize:'50px'}}>Component Life Cycle</h1>
      <Link to={'/'} target='_blank' style={linkStyle}>Home</Link>
      <Link to={'lifecycle'} target='_blank' style={linkStyle}>Lifecycle</Link>
      <Link to={'mounting'} target='_blank' style={linkStyle}>Mounting</Link>
      <Link to={'updating'} target='_blank' style={linkStyle}>Updating</Link>
      <Link to={'unmounting'} target='_blank' style={linkStyle}>Unmounting</Link>
    </div>
  )
}

export default Header