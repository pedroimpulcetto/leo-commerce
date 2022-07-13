import Coupon from "./Coupon";

export default class CouponPorcentage extends Coupon {
    constructor(code, discount, createDate, applicationDate) {
        super(code, discount, createDate, applicationDate);
        this.type = "percentage";
    }

    save(value) {
        const percentage = 1 - this.discount / 100;
        return value * percentage;
    }
}
