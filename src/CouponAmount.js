import Coupon from "./Coupon";

export default class CouponAmount extends Coupon {
    constructor(code, discount, createDate, applicationDate) {
        super(code, discount, createDate, applicationDate);
        this.type = "amount";
    }

    save(value) {
        if (value < this.discount) return value;
        return value - this.discount;
    }
}
