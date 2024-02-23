import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='footer'>
      <p>&copy; 2024 Şirket Adı. Tüm hakları saklıdır.</p>
    <nav>
      <Link style={{color:"white", textDecoration:"none"}}>Gizlilik Politikası</Link> <br/>
      <Link style={{color:"white", textDecoration:"none"}}>Kullanım Koşulları</Link>
    </nav>
    </div>
  )
}
