import Cart from "./Cart.js";
import Product from "./Product.js";
import { coupons } from "../coupons.js";
//import CouponPercentage from "./CouponPercentage.js";

export default class CartAPI {
    constructor() {
        this.cart = new Cart();
    }

    post(req, res) {
        let product;
        try {
            product = new Product(
                req.body?.name,
                req.body?.description,
                req.body?.price,
                req.body?.discount,
                req.body?.category
            );
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
        this.cart.addProduct(product);
        return res.status(200).json(product);
    }

    get(req, res) {
        return res.status(200).json(this.cart.products);
    }

    getSummary(req, res) {
        const summary = {
            quantityProducts: this.cart.quantityProducts(),
            totalPrice: this.cart.getTotalPrice(),
            freight: this.cart.freightCalculator(),
        };
        return res.status(200).json(summary);
    }

    postCoupon(req, res) {
        const code = req.body?.code;
        const newCoupon = coupons.filter((x) => x.code === code);

        if (newCoupon.length === 0) {
            return res.status(404).json({ message: "Cupom não existente" });
        }
        // const superCoupon = new CouponPercentage(
        //     newCoupon[0].code,
        //     newCoupon[0].discount_percentage,
        //     new Date(newCoupon[0].create_date),
        //     new Date(new Date().toISOString().slice(0, 10))
        // );
    }
}
