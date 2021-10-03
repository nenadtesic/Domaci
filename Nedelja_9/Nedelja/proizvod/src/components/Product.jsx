const Product = ({product}) => {
    return (
        <div>
            <h3>{product.name}: ${product.price}</h3>
            
        </div>
    );
}

export default Product;