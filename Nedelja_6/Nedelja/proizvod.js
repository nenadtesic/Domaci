class ProductGroup {
    title
    vat
    constructor(title, vat){
        this.title = title
        this.vat = vat
    }
}

class Product {
    title
    barCode
    price
    group
    constructor(title, barCode, price, group){
        this.title = title
        this.barCode = barCode
        this.price = price
        this.group = group
    }

}

class ShoppingCart {
    static itemi = []
    constructor(){

    }

    addProduct(product, quantity = 1){

    }
}

class ShoppingCartItem {
    product
    quantity
    constructor(product, quantity){
        this.product = product
        this.quantity = quantity
    }  
}

class Checkout {
    printCheck(shoppingCart){
        //prima klasu ShopingCart i printa u HTML
    }
}