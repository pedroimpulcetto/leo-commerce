export default class Cart {
    constructor(freight) {
        this.freight = freight;

        this.products = [];
        this.totalPrice = 0;
        this.subTotalPrice = 0;
        this.subTotalPricePlusCoupon = 0;

        this.coupon = null;
    }

    getFreightValue() {
        return this.freight?.value(this.subTotalPricePlusCoupon, this.coupon);
    }

    addProduct(product) {
        this.products.push(product);
        this.subTotalPrice += product.finalPrice();
        this.calculateValues();
    }

    saveCoupon() {
        if (this.coupon) {
            this.subTotalPricePlusCoupon = this.coupon?.save(
                this.subTotalPrice
            );
        } else {
            this.subTotalPricePlusCoupon = this.subTotalPrice;
        }
    }

    calculateValues() {
        this.saveCoupon();
        this.totalPrice = this.subTotalPricePlusCoupon + this.getFreightValue();
    }

    quantityProducts() {
        return this.products.length;
    }

    getSubTotalPrice() {
        return this.subTotalPrice;
    }

    getTotalPrice() {
        return this.totalPrice;
    }

    addCoupon(coupon) {
        if (!coupon.isValid()) {
            console.log("Cupom expirado ou inválido");
            return;
        }
        this.coupon = coupon;
        this.calculateValues();
    }
}
