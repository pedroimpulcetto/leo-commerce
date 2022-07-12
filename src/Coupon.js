export default class Coupon {
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
}
