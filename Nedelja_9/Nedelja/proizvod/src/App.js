import { useEffect, useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import { getAllProducts, createProduct } from "./service"
import { v4 as uuidv4 } from 'uuid';
import Total from "./components/Total";


function App() {
  const [products, setProducts] = useState([])

  useEffect(()=> {
    getAllProducts().then(res => {
      setProducts(res.data)
    })
  }, [])

  const submitProduct = (name,price,info) => {
    const product = {name,price,info,id: uuidv4()}
    createProduct(product)
    .then(getAllProducts)
    .then(res => setProducts(res.data))
  }


  return (
    <div className="shoping">
      <ProductForm onSubmitProduct={submitProduct}/>
      <ProductList products={products}/>
    </div>
  );
}

export default App;
