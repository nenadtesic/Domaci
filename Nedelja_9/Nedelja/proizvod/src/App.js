import { useEffect, useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import { getAllProducts, createProduct } from "./service"

function App() {
  const [products, setProducts] = useState([])

  useEffect(()=> {
    getAllProducts().then(res => {
      setProducts(res.data)
    })
  }, [])

  const submitProduct = (e) => {
    e.preventDefault()
    // createProduct(e.)
  }

  return (
    <div className="shoping">
      <ProductForm />
      <ProductList products={products}/>
    </div>
  );
}

export default App;
