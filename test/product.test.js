import Product from "../src/Product";

test("deve criar um produto que tenha nome, preço e categoria", () => {
    const product = new Product(
        "Mouse",
        "Mouse sem fio",
        29.9,
        null,
        "Informática"
    );

    expect(product).toBeInstanceOf(Product);
});

test("deve ocorrer um erro ao criar um produto sem nome", () => {
    expect(() => {
        new Product();
    }).toThrow("Nome é obrigatório!");
});

test("deve ocorrer um erro ao criar um produto sem preço", () => {
    expect(() => {
        new Product("Mouse");
    }).toThrow("Preço é obrigatório!");
});

test("deve ocorrer um erro ao criar um produto sem categoria", () => {
    expect(() => {
        new Product("Mouse", "", 29.9);
    }).toThrow("Categoria é obrigatória!");
});

test("deve calcular o desconto de um produto", () => {
    const product = new Product(
        "Mouse",
        "Mouse sem fio HyperX",
        29.9,
        10,
        "Informática"
    );
    const finalPrice = product.finalPrice();

    expect(finalPrice).toBe(26.91);
});

test("deve criar um produto sem desconto algum", () => {
    const product = new Product(
        "Teclado",
        "Teclado com fio Logitech",
        129.99,
        null,
        "Informática"
    );
    const finalPrice = product.finalPrice();

    expect(finalPrice).toBe(product.price);
});

test("deve criar um produto com 0 desconto", () => {
    const product = new Product(
        "Teclado",
        "Teclado com fio Logitech",
        129.99,
        0,
        "Informática"
    );

    const finalPrice = product.finalPrice();
    expect(finalPrice).toBe(product.price);
});
