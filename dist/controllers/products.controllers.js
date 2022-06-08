"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.putProduct = exports.postProduct = exports.getProductById = exports.getProduct = void 0;
const postgres_config_1 = require("../services/postgres.config");
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getResult = yield postgres_config_1.pool.query('SELECT * FROM products');
        res.json(getResult.rows);
    }
    catch (error) {
        return res.status(500).json("Error Interno");
    }
});
exports.getProduct = getProduct;
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const getResult = yield postgres_config_1.pool.query('SELECT * FROM products WHERE sku = $1', [id]);
        return res.status(200).json(getResult.rows);
    }
    catch (error) {
        return res.status(500).json("Internal Server Error");
    }
});
exports.getProductById = getProductById;
const postProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { sku, title, price, description, category } = req.body;
    try {
        const result = yield postgres_config_1.pool.query("INSERT INTO products ( sku, title , price , description, category ) VALUES ( $1, $2, $3, $4, $5 ) RETURNING * ", [sku, title, price, description, category]);
        return res.json(result.rows[0]);
    }
    catch (error) {
        return res.status(500).json("Error Interno");
    }
});
exports.postProduct = postProduct;
const putProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { title, price, description, category } = req.body;
        const result = yield postgres_config_1.pool.query("UPDATE products SET  title = $1, price = $2, description = $3, category = $4  WHERE sku = $5", [title, price, description, category, id]);
        if (result.rowCount > 0) {
            return res.json({
                message: `Product with id:${id} has been edited`
            });
        }
        else {
            return res.status(500).json("Internal Server Error");
        }
    }
    catch (error) {
        return res.status(500).json("Internal Server Error");
    }
});
exports.putProduct = putProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield postgres_config_1.pool.query("DELETE FROM products WHERE sku = $1", [id]);
        if (result.rowCount > 0) {
            return res.json({
                message: `Product with id:${id}  has been removed`
            });
        }
        else {
            return res.status(500).json("Internal Server Error");
        }
    }
    catch (error) {
        return res.status(500).json("Internal Server Error");
    }
});
exports.deleteProduct = deleteProduct;
