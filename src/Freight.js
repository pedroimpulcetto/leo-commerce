export default class Freight {
    DEFAULT = 20;
    FREE = 0;
    MAX_VALUE = 200;

    value(amount, coupon) {
        if (coupon?.type === "freight") return this.FREE;
        if (this.hasFreight(amount)) return this.DEFAULT;
        return this.FREE;
    }

    hasFreight(amount) {
        if (amount <= this.MAX_VALUE) {
            return true;
        }
        return false;
    }
}
