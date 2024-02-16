import { useState } from 'react';
import './App.css';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
const data = require("./products.json")


function App() {
  const [products, setProducts] = useState(data.products)

  return (
    <>
      <Navbar products={products} setProducts={setProducts} />
      <Homepage products={products} />
    </>
  );
}

export default App;
