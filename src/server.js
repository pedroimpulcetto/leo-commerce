import express from "express";
import cors from "cors";
import CartAPI from "./CartAPI.js";
import ProductAPI from "./ProductAPI.js";

const app = express();
const routes = express.Router();

const cartAPI = new CartAPI();
const productsAPI = new ProductAPI();

routes.get("/products", (req, res) => {
    productsAPI.get(req, res);
});

routes.post("/carts", (req, res) => {
    cartAPI.post(req, res);
});

routes.get("/carts", (req, res) => {
    cartAPI.get(req, res);
});

routes.get("/carts/summary", (req, res) => {
    cartAPI.getSummary(req, res);
});

routes.post("/carts/coupons", (req, res) => {
    cartAPI.postCoupon(req, res);
});

routes.post("/carts/addcoupons", (req, res) => {
    cartAPI.postAddCoupon(req, res);
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
