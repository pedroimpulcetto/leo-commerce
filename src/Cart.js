export default class Cart{
    constructor(freight){
        this.products = [];
        this.freight = freight;
    }
    addProduct(product){
        this.products.push(product)
    }

    quantityProducts(){
        return this.products.length;
    }
    
}