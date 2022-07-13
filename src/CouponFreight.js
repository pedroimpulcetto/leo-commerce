import Coupon from "./Coupon";

export default class CouponFreight extends Coupon {
    constructor(code, discount = null, createDate, applicationDate) {
        super(code, discount, createDate, applicationDate);
        this.type = "freight";
    }

    save(value) {
        return value;
    }
}
