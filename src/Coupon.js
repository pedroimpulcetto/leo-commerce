export default class Coupon {
    constructor(code, discount, createDate, applicationDate) {
        this.code = code;
        this.discount = discount;
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

    save() {
        throw new Error("Not implemented yet.");
    }

    hasDiscount() {
        return Boolean(this.discount);
    }
}
