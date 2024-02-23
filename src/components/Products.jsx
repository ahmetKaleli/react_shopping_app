import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Products({product ,basket ,setBasket}) {

  const basketItem = basket.find( item => item.id === product.id)

  const clickAdd =()=>{
    // console.log("add basket");

    // eklemeden önce baskette ürün var mı ona bakıcazz

    const checkBasket = basket.find(item => item.id === product.id )

    if(checkBasket){ // eğer daha önce eklenmiş ürün varsa amountu arttırcaz
      // filter kullanarak önceki ürünü hariç tutarak ekledik
      checkBasket.amount +=1
      setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
    }else{
      setBasket([...basket, {
        id: product.id,
        amount :1
      }]) // bunu görmek için app de useeffect kullandım
    }
  }

  const clickDel =()=>{
    const currentBasket = basket.find(item => item.id === product.id )
    const basketWithoutCurrent = basket.filter(item => item.id !== product.id)

    currentBasket.amount -=1
    if(currentBasket.amount ===0){
      setBasket([...basketWithoutCurrent])
    }else{
      setBasket([...basketWithoutCurrent, currentBasket])
    }

  }

  return (
    <div className='products'>
       <img onClick={()=>navigate(`/detail/${product.id}`)} src={product.img}/>
          <div className='pd-det'>
            <h3 onClick={()=>navigate(`/detail/${product.id}`)}>{product.name}</h3>
            <h4>$ {product.price}</h4> 
          </div> 
        <div className='actions'>
            <button disabled={!basketItem} className='a-l' onClick={clickDel}>Del</button>
            <span>{basketItem && basketItem.amount ||0}</span>
            <button className='a-r'  onClick={clickAdd}>Add</button>
        </div>
    </div>
  )
}
