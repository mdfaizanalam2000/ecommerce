import { useState } from 'react';
import './App.css';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Toast from './components/Toast';
import { toast } from "react-toastify";
const data = require("./products.json")

function App() {
  const [products, setProducts] = useState(data.products)
  const [cartItems, setCartItems] = useState([])

  const handleAddToCart = (product) => {
    let existingItems = cartItems.find(item => item.product.id === product.id)
    if (existingItems) {
      const latestCartItems = cartItems.map(item =>
        item.product.id === product.id ? { ...item, qty: item.qty + 1 } : item
      )
      setCartItems(latestCartItems)
    } else {
      setCartItems([...cartItems, { product: product, qty: 1 }]);
    }
    toast("Item added to cart!")
  };

  return (
    <>
      <Navbar products={products} setProducts={setProducts} cartItems={cartItems} setCartItems={setCartItems} />
      <Homepage products={products} handleAddToCart={handleAddToCart} />
      <Toast />
    </>
  );
}

export default App;
