import Cart from '../src/Cart';
import Product from '../src/Product';
import Catalog from '../src/Catalog';

test('deve criar um catálogo de produtos', () => {
    const catalog = new Catalog()

    expect(catalog).toBeInstanceOf(Catalog)
}) 

test('deve criar a categoria Lançamentos no catálogo de produtos', () => {
    const catalog = new Catalog('Lançamentos')

    expect(catalog.category).toBe('Lançamentos')
})