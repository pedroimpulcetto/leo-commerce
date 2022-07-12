import Coupon from "../src/Coupon";

test("deve criar um cupom", () => {
    const coupon = new Coupon();

    expect(coupon).toBeInstanceOf(Coupon);
});

test("deve criar um cupom que não esteja expirado", () => {
    const coupon = new Coupon(
        "PEDRO10",
        10,
        new Date("2022-07-09"),
        new Date("2022-07-11")
    );
    const valid = coupon.isValid();
    expect(valid).toBe(true);
});
