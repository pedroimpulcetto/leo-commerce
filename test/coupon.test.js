import Coupon from "../src/Coupon";
import CouponAmount from "../src/CouponAmount";
import CouponPorcentage from "../src/CouponPorcentage";
import CouponFreight from "../src/CouponFreight";

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

test("deve criar um cupom válido de porcentagem de desconto", () => {
    const coupon = new CouponPorcentage(
        "PEDRO10",
        10,
        new Date("2022-07-09"),
        new Date("2022-07-11")
    );

    expect(coupon.isValid()).toBeTruthy();
    expect(coupon.type).toBe("percentage");
});

test("deve criar um cupom válido de valor(quantia R$) de desconto", () => {
    const coupon = new CouponAmount(
        "PEDRO150",
        150,
        new Date("2022-07-09"),
        new Date("2022-07-11")
    );

    expect(coupon.isValid()).toBeTruthy();
    expect(coupon.type).toBe("amount");
});

test("deve criar um cupom válido de frete gratis", () => {
    const coupon = new CouponFreight(
        "PEDROENTREGA",
        null,
        new Date("2022-07-09"),
        new Date("2022-07-11")
    );

    expect(coupon.isValid()).toBeTruthy();
    expect(coupon.type).toBe("freight");
});
