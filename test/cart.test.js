import Cart from '../src/Cart';
import Product from '../src/Product';

test('deve criar um carrinho de compras', () => {
    const cart = new Cart()
    
    expect(cart).toBeInstanceOf(Cart)
})

test('deve ter nenhum produto no carrinho', () => {
    const cart = new Cart()
    const qty = cart.quantityProducts()
    expect(qty).toBe(0)
})

test('deve ter um produto no carrinho', () => {
    const cart = new Cart()
    const product = new Product('Teclado', 'Teclado com fio Logitech', 129.99, null, 'Informatica')
    cart.addProduct(product)
    const qty = cart.quantityProducts()

    expect(qty).toBe(1)
})

test('deve ter 2 produtos no carrinho', () => {
    const cart = new Cart()
    let product = new Product('Teclado', 'Teclado com fio Logitech', 129.99, null, 'Informatica')
    let product1 = new Product(
        'Mouse',
        'Mouse sem fio HyperX',
        29.90,
        10,
        'Informática'
    )
    cart.addProduct(product)
    cart.addProduct(product1)
    const qty = cart.quantityProducts()

    expect(qty).toBe(2)
})