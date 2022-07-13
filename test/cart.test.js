import Cart from "../src/Cart";
import CouponAmount from "../src/CouponAmount";
import CouponFreight from "../src/CouponFreight";
import CouponPorcentage from "../src/CouponPorcentage";
import Freight from "../src/Freight";
import Product from "../src/Product";

test("deve criar um carrinho de compras", () => {
    const cart = new Cart();

    expect(cart).toBeInstanceOf(Cart);
});

test("deve ter nenhum produto no carrinho", () => {
    const cart = new Cart();
    const qty = cart.quantityProducts();
    expect(qty).toBe(0);
});

test("deve ter um produto no carrinho", () => {
    const cart = new Cart();
    const product = new Product(
        "Teclado",
        "Teclado com fio Logitech",
        129.99,
        null,
        "Informatica"
    );
    cart.addProduct(product);
    const qty = cart.quantityProducts();

    expect(qty).toBe(1);
});

test("deve ter 2 produtos no carrinho", () => {
    const cart = new Cart();
    const product = new Product(
        "Teclado",
        "Teclado com fio Logitech",
        129.99,
        null,
        "Informatica"
    );
    const product1 = new Product(
        "Mouse",
        "Mouse sem fio HyperX",
        29.9,
        10,
        "Informática"
    );
    cart.addProduct(product);
    cart.addProduct(product1);
    const qty = cart.quantityProducts();

    expect(qty).toBe(2);
});

test("deve calcular o valor total de produtos do carrinho", () => {
    const cart = new Cart();
    const product = new Product(
        "Teclado",
        "Teclado com fio Logitech",
        150,
        null,
        "Informatica"
    );
    const product1 = new Product(
        "Mouse",
        "Mouse sem fio HyperX",
        100,
        10,
        "Informática"
    );
    cart.addProduct(product);
    cart.addProduct(product1);
    const subTotalPrice = cart.getSubTotalPrice();

    expect(subTotalPrice).toBe(240);
});

test("deve calcular o valor do carrinho sem produto algum", () => {
    const cart = new Cart();
    const totalPrice = cart.totalPrice();

    expect(totalPrice).toBe(0);
});

test("deve criar um carrinho com um produto que tenha o frete no valor padrão", () => {
    const cart = new Cart();
    const product = new Product(
        "Microfone",
        "Microfone para streamer com fio HyperX",
        150,
        0,
        "Eletrônicos"
    );
    cart.addProduct(product);

    const freight = new Freight();
    const freightValue = freight.value(cart.getSubTotalPrice(), null);

    expect(freightValue).toBe(20);
});

test("deve criar um carrinho que o valor do produto atinja o frete grátis", () => {
    const cart = new Cart();
    const product = new Product(
        "CPU",
        "CPU IntelBras",
        2000,
        15,
        "Informática"
    );
    cart.addProduct(product);

    const freight = new Freight();
    const freightValue = freight.value(cart.getSubTotalPrice(), null);

    expect(freightValue).toBe(0);
});

test("deve criar um carrinho com um produto e um cupom de valor de desconto válido", () => {
    const cart = new Cart();
    const product = new Product("CPU", "CPU IntelBras", 190, 0, "Informática");
    cart.addProduct(product);

    const freight = new Freight();
    cart.addFreight(freight);

    const coupon = new CouponAmount(
        "PEDRO100",
        100,
        new Date("2022-07-09"),
        new Date("2022-07-11")
    );
    cart.addCoupon(coupon);

    const totalPrice = cart.totalPrice();

    expect(totalPrice).toBe(110);
});

test("deve criar um carrinho com um produto e um cupom de valor de desconto inválido", () => {
    const cart = new Cart();
    const product = new Product("CPU", "CPU IntelBras", 190, 0, "Informática");
    cart.addProduct(product);

    const freight = new Freight();
    cart.addFreight(freight);

    const coupon = new CouponAmount(
        "PEDRO100",
        100,
        new Date("2022-07-01"),
        new Date("2022-07-21")
    );
    cart.addCoupon(coupon);

    const totalPrice = cart.totalPrice();

    expect(totalPrice).toBe(210);
});

test("deve criar um carrinho com um produto e um cupom de procentagem de desconto válido", () => {
    const cart = new Cart();
    const product = new Product("CPU", "CPU IntelBras", 100, 0, "Informática");
    cart.addProduct(product);

    const freight = new Freight();
    cart.addFreight(freight);

    const coupon = new CouponPorcentage(
        "PEDRO10",
        10,
        new Date("2022-07-01"),
        new Date("2022-07-11")
    );
    cart.addCoupon(coupon);

    const totalPrice = cart.totalPrice();

    expect(totalPrice).toBe(110);
});

test("deve criar um carrinho com um produto e um cupom de frete grátis válido", () => {
    const cart = new Cart();

    const product = new Product("CPU", "CPU IntelBras", 100, 0, "Informática");
    cart.addProduct(product);

    const freight = new Freight();
    cart.addFreight(freight);

    const coupon = new CouponFreight(
        "PEDROFRETEGRATIS",
        null,
        new Date("2022-07-01"),
        new Date("2022-07-11")
    );
    cart.addCoupon(coupon);

    const totalPrice = cart.totalPrice();

    expect(totalPrice).toBe(100);
});
