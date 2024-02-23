import React, { useEffect, useState } from 'react'
import axios from "axios"
import Products from '../components/Products'
import { useNavigate} from "react-router-dom"

export default function Home({filtered,setProducts,products,basket ,setBasket}) {
  const navigate = useNavigate()

  useEffect(()=>{
    const url = "src/products.json"
    
    axios(url)
    .then((res)=>setProducts(res.data))
    .catch(error => console.error('Veri çekme hatası:', error));
  },[])
  

  return (
    <div className='container'>
        {
          filtered.map((product)=>(
            <div key={product.id}>
              <Products product={product} basket={basket} setBasket={setBasket}/>
            </div>
          ))
        }

    </div>
  )
}
