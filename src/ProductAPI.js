import { products } from "../products.js";

export default class ProductAPI {
    constructor() {
        this.products = products;
    }

    get(req, res) {
        return res.status(200).json(this.products);
    }
}
