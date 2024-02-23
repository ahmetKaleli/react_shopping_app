import React from 'react'
import BasketItem from '../components/BasketItem'

export default function Basket({basket, total, products, setBasket}) {

  const resetBasket =()=>{
    setBasket([])
  }


  return (
    <div className="basket-container container">
				<h3>Shopping Details</h3>
				<ul>
					{basket.map(item => (
						<BasketItem key={item.id} item={item} product={products.find(p => p.id === item.id)}/>
					))}
				</ul>
				<div className="total">
					Total: ${total}
				</div>
				<button className="basket-reset-btn" onClick={resetBasket}>Reset Basket</button>
			</div>
  )
}
