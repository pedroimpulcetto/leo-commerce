import CouponPercentage from "../src/CouponPercentage";

test("deve criar um cupom", () => {
    const coupon = new CouponPercentage();

    expect(coupon).toBeInstanceOf(CouponPercentage);
});

test("deve criar um cupom que não esteja expirado", () => {
    const coupon = new CouponPercentage(
        "PEDRO10",
        10,
        new Date("2022-07-09"),
        new Date("2022-07-11")
    );
    const valid = coupon.isValid();
    expect(valid).toBe(true);
});

test("deve criar um cupom com data já expirada", () => {
    const coupon = new CouponPercentage(
        "LEO20",
        20,
        new Date("2022-06-21"),
        new Date("2022-07-12")
    );
    const valid = coupon.isValid();
    expect(valid).toBe(false);
});

test("deve retornar 0 ao calcular desconto de um produto sem valor", () => {
    const coupon = new CouponPercentage(
        "PEDRO20",
        20,
        new Date("2022-07-15"),
        new Date("2022-07-18")
    );
    const multiplicatedDiscount = coupon.calculateDiscount(0);

    expect(multiplicatedDiscount).toBe(0);
});

test("deve retornar o valor com o desconto do cupom", () => {
    const coupon = new CouponPercentage(
        "PEDRO20",
        20,
        new Date("2022-07-15"),
        new Date("2022-07-18")
    );
    const multiplicatedDiscount = coupon.calculateDiscount(100);

    expect(multiplicatedDiscount).toBe(80);
});

/* test("deve criar um cupom com 20% de desconto na compra do segundo item e que o frete fique grátis", () => {
    const cart = new Cart();
    const coupon = new CouponPercentage("2PARA20", 20, new Date(), new Date());
    const product = new Product(
        "Celular Xiaomi",
        "Smartphone Xiaomi Mi11",
        "2200",
        0,
        "Celular e Telefonia"
    );
    cart.addProduct(product);
    const product1 = new Product(
        "Celular Xiaomi",
        "Smartphone Xiaomi Mi11",
        "2200",
        0,
        "Celular e Telefonia"
    );
    cart.addProduct(product1);

    expect(finalPrice).toBe(3520);
    expect(freight).toBe(0);
}); */
