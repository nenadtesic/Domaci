const ProductForm = ({submitProduct}) => {
    return (
        <div> 
            <form onSubmit={
                submitProduct
            }>
                <h2>Add New Product:</h2>
                <label>Name:</label><br />
                <input placeholder="Ime produkta"/><br />
                <label>Price:</label><br />
                <input type="number" placeholder="Cena produkta"/><br />
                <label>Info:</label><br />
                <input placeholder="Info produkta"/><br />
                <input type="submit" value="kreiraj produkt"/>
                <hr />
            </form>
        </div>
    );
}
 
export default ProductForm;