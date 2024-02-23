import React, { useState } from 'react'
import { Link, useNavigate} from "react-router-dom"
import { SlBasketLoaded } from "react-icons/sl";

export default function Header({setText, text}) {

  const navigate = useNavigate()
  
  return (
    <div className='header'>
      <h2>Welcome to Shopping !</h2>
      <nav className='link'>
        <Link to="/" style={{color:"white", textDecoration:"none"}} >Home</Link>
        <Link style={{color:"white", textDecoration:"none",paddingInline:"20px"}}>About</Link>
        <Link to="/contact" style={{color:"white", textDecoration:"none"}}>Contact</Link>
      </nav>

      <div className='header-r'>
        <div className='basket'>
          <SlBasketLoaded onClick={()=>navigate("/basket")} style={{width:"45px", height:"31px"}} />
        </div>
        <input value={text} onChange={(e)=>setText(e.target.value)} placeholder='SEARCH...' />

      </div>
    </div>
  )
}
