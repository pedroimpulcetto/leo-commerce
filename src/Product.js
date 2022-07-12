export default class Product {
    constructor(name, description, price, discount = null, category) {
        if (!name) throw new Error("Nome é obrigatório!");
        if (!price) throw new Error("Preço é obrigatório!");
        if (!category) throw new Error("Categoria é obrigatória!");

        this.name = name;
        this.description = description;
        this.price = price;
        this.discount = discount;
        this.category = category;
    }

    finalPrice() {
        const finalPrice = this.calculateDiscount();
        return finalPrice;
    }

    calculateDiscount() {
        const percentage = this.discount / 100;
        const multiplicatedDiscount = 1 - percentage;
        const finalPrice = multiplicatedDiscount * this.price;
        return finalPrice;
    }
}
