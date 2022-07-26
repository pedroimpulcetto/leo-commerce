export default class CouponPercentage {
    constructor(code, discountPercentage, createDate, applicationDate) {
        this.code = code;
        this.discountPercentage = discountPercentage;
        this.createDate = createDate;
        this.applicationDate = applicationDate;
    }

    isValid() {
        if (this.applicationDate < this.expirationDate()) {
            return true;
        }
        return false;
    }

    expirationDate() {
        return new Date(
            this.createDate.setUTCDate(this.createDate.getUTCDate() + 15)
        );
    }

    calculateDiscount(totalPrice) {
        const percentage = this.discountPercentage / 100;
        const multiplicatedDiscount = 1 - percentage;
        return multiplicatedDiscount * totalPrice;
    }
}
