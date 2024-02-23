import React from 'react'

export default function BasketItem({item, product}) {
  return (
    <div>
			<li className="basket-item">
				<img src={product.img} /> - {product.name} <span>x {item.amount}</span>
			</li>
		</div>
  )
}
