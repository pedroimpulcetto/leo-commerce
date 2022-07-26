export default class Cart {
    constructor() {
        this.products = [];
        this.coupon = null;
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

        if (this.coupon) {
            totalPrice = this.coupon.calculateDiscount(totalPrice);
        }
        return totalPrice;
    }

    freightCalculator() {
        const totalPrice = this.getTotalPrice();
        if (totalPrice === 0) return 0;
        if (totalPrice <= 200) return 20;
        return 0;
    }

    addCoupon(coupon) {
        if (coupon.isValid()) {
            this.coupon = coupon;
        }
    }
}
