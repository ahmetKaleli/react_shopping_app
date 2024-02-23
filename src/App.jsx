import { BrowserRouter as Router , Routes, Route  } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Details from "./pages/Details"
import Basket from "./pages/Basket"
import { useState, useEffect } from "react"
import Contact from "./pages/Contact"

function App() {

  const [text, setText] = useState("")
  const [products, setProducts] = useState([])
  const [basket, setBasket] = useState([])
  const [total, setTotal] = useState(0)


  const filtered = products.filter((item)=>{
    return Object.keys(item).some((key)=>
      item[key].toString().toLowerCase().includes(text.toLocaleLowerCase())
    )
  })

  useEffect(()=>{
    //console.log(basket); // basket değiştiğinde total hesaplancak
    setTotal(
      basket.reduce((acc, item) =>{
        return acc + (item.amount * (products.find(product => product.id === item.id).price))
    
      },0)
    )
  },[basket])

  

  return (
    <div className="app">
     <Router>
      <Header text={text} setText={setText} />
      <Routes>
        <Route path="/" element={<Home filtered={filtered} products={products} setProducts={setProducts} 
          basket={basket} setBasket={setBasket}
        />}/>
        <Route path="/detail/:id" element={<Details products={products}/>}/>
        <Route path="/basket" element={<Basket total={total} basket={basket} setBasket={setBasket} products={products} />}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
     </Router>
    </div>
  )
}

export default App
