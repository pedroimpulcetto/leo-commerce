import Cart from "../src/Cart";
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
    let product = new Product(
        "Teclado",
        "Teclado com fio Logitech",
        129.99,
        null,
        "Informatica"
    );
    let product1 = new Product(
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
    let product = new Product(
        "Teclado",
        "Teclado com fio Logitech",
        150,
        null,
        "Informatica"
    );
    let product1 = new Product(
        "Mouse",
        "Mouse sem fio HyperX",
        100,
        10,
        "Informática"
    );
    cart.addProduct(product);
    cart.addProduct(product1);
    const totalPrice = cart.getTotalPrice();

    expect(totalPrice).toBe(240);
});

test("deve calcular o valor do carrinho sem produto algum", () => {
    const cart = new Cart();
    const totalPrice = cart.getTotalPrice();

    expect(totalPrice).toBe(0);
});

test("deve criar um carrinho com um produto que tenha o frete no valor padrão", () => {
    const cart = new Cart();
    let product = new Product(
        "Microfone",
        "Microfone para streamer com fio HyperX",
        150,
        0,
        "Eletrônicos"
    );
    cart.addProduct(product);
    const freight = cart.freightCalculator();
    expect(freight).toBe(20);
});

test("deve criar um carrinho que o valor do produto atinja o frete grátis", () => {
    const cart = new Cart();
    let product = new Product("CPU", "CPU IntelBras", 2000, 15, "Informática");
    cart.addProduct(product);
    const freight = cart.freightCalculator();

    expect(freight).toBe(0);
});

