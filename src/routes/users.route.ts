import { Router } from "express"
import {
    getUsers,
    getUsersById,
    postUser,
    putUser,
    deleteUser
} from '../controllers/users.controllers'

export const UsersRoute: Router = Router()

UsersRoute.get("/api/users/", getUsers)

UsersRoute.get("/api/users/:id", getUsersById)

UsersRoute.post("/api/users", postUser)

UsersRoute.put("/api/users/:id", putUser)

UsersRoute.delete("/api/users/:id", deleteUser)

