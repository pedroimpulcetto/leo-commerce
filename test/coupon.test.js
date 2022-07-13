import Coupon from "../src/Coupon";
import Product from "../src/Product";
import Cart from "../src/Cart";

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

test("deve criar um cupom com data já expirada", () => {
    const coupon = new Coupon(
        "LEO20",
        20,
        new Date("2022-06-21"),
        new Date("2022-07-12")
    );
    const valid = coupon.isValid();
    expect(valid).toBe(false);
});

test("deve criar um cupom com 20% de desconto na compra do segundo item e que o frete fique grátis", () => {
    const cart = new Cart();
    const coupon = new Coupon("2PARA20", 20, new Date(), new Date());
    let product = new Product(
        "Celular Xiaomi",
        "Smartphone Xiaomi Mi11",
        "2200",
        0,
        "Celular e Telefonia"
    );
    cart.addProduct(product);
    let product1 = new Product(
        "Celular Xiaomi",
        "Smartphone Xiaomi Mi11",
        "2200",
        0,
        "Celular e Telefonia"
    );
    cart.addProduct(product1);
    const freight = cart.freightCalculator();
    const totalPrice = cart.getTotalPrice();
    if (cart.quantityProducts = 2) {
        coupon.calculateDiscount();
        return finalPrice;
    }
    const finalPrice = coupon.calculateDiscount();

    expect(finalPrice).toBe(3520);
    expect(freight).toBe(0);
});
