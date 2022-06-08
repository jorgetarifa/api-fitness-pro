import { Router } from "express"
import {
    getProduct,
    getProductById,
    postProduct,
    putProduct,
    deleteProduct
} from '../controllers/products.controllers'

export const RouterProduct: Router = Router()


RouterProduct.get("/api/products", getProduct)

RouterProduct.get("/api/products/:id", getProductById)

RouterProduct.post("/api/products", postProduct)

RouterProduct.put("/api/products/:id", putProduct)

RouterProduct.delete("/api/products/:id", deleteProduct)

