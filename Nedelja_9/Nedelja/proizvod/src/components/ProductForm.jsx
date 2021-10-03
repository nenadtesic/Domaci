import { useState } from "react";

const ProductForm = ({onSubmitProduct}) => {
    const [name,setName] = useState('')
    const [price,setPrice] = useState('')
    const [info,setInfo] = useState('')
    return (
        <div> 
            <form onSubmit={(e)=> {
                  e.preventDefault()
                  onSubmitProduct(name,price,info)
            }}>
                <h2>Add New Product:</h2>
                <label>Name:</label><br />
                <input value={name} name="name" placeholder="Ime produkta" onChange={e => setName(e.target.value)}/><br />
                <label>Price:</label><br />
                <input value={price}  name="price" type="number" placeholder="Cena produkta" onChange={e => setPrice(Number(e.target.value))}/><br />
                <label>Info:</label><br />
                <input value={info}  name="info" placeholder="Info produkta" onChange={e => setInfo(e.target.value)}/><br />
                <input type="submit" value="kreiraj produkt"/>
                <hr />
            </form>
        </div>
    );
}
 
export default ProductForm;