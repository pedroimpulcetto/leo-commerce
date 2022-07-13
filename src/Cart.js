export default class Cart {
    constructor() {
        this.products = [];
        this.subTotalPrice = 0;
        this.coupon = null;
        this.freight = null;
    }

    addProduct(product) {
        this.products.push(product);
        this.subTotalPrice += product.finalPrice();
    }

    addFreight(freight) {
        this.freight = freight;
    }

    quantityProducts() {
        return this.products.length;
    }

    getSubTotalPrice() {
        return this.subTotalPrice;
    }

    totalPrice() {
        if (this.subTotalPrice === 0) return 0;
        if (this.coupon?.hasDiscount()) {
            this.subTotalPrice = this.coupon?.save(this.subTotalPrice);
        }
        this.subTotalPrice += this.freight?.value(
            this.subTotalPrice,
            this.coupon
        );
        return this.subTotalPrice;
    }

    addCoupon(coupon) {
        if (!coupon.isValid()) {
            console.log("Cupom expirado ou inválido");
            return;
        }
        this.coupon = coupon;
    }
}
