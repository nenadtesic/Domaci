import { useState } from "react";

const Product = ({product}) => {
    
    return (
        <div>
            <h3>{product.name}: ${product.price}</h3>
            <p>qty:{qty}</p>
            <button>Show Info</button>
            <button onClick={()=>{
                setQty(qty + 1)
            }}>+</button>
            <button onClick={()=>{
                setQty(qty - 1)
            }}>-</button>
        </div>
    );
}

export default Product;