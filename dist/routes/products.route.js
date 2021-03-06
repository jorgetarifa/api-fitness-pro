"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterProduct = void 0;
const express_1 = require("express");
const products_controllers_1 = require("../controllers/products.controllers");
exports.RouterProduct = (0, express_1.Router)();
exports.RouterProduct.get("/api/products", products_controllers_1.getProduct);
exports.RouterProduct.get("/api/products:id", products_controllers_1.getProductById);
exports.RouterProduct.post("/api/products", products_controllers_1.postProduct);
exports.RouterProduct.put("/api/products:id", products_controllers_1.putProduct);
exports.RouterProduct.delete("/api/products:id", products_controllers_1.deleteProduct);
