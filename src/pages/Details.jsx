import React, { useEffect, useState } from 'react'
import {  useParams} from "react-router-dom"

export default function Details({products}) {

  const {id} = useParams()
  const [getData , setGetData] = useState([])

  useEffect(()=>{
    if(id){
        setGetData(products.find(pd=> pd.id == id))
    }
},[id])

  return (
    <div className='detail'>
      
      <img src={getData?.img} />
      <h2>{getData?.name}</h2>
      <h3>$ {getData?.price}</h3>
      {getData?.attribute}
    </div>
  )
}
