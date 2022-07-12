export default class Cart {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    quantityProducts() {
        return this.products.length;
    }

    getTotalPrice() {
        let totalPrice = 0;
        for (const product of this.products) {
            totalPrice = totalPrice + product.finalPrice();
        }
        return totalPrice;
    }

    freightCalculator() {
        const totalPrice = this.getTotalPrice();
        if (totalPrice <= 200) {
            return 20;
        }
        return 0;
    }
}
