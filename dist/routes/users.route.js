"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoute = void 0;
const express_1 = require("express");
const users_controllers_1 = require("../controllers/users.controllers");
exports.UsersRoute = (0, express_1.Router)();
exports.UsersRoute.get("/api/users/", users_controllers_1.getUsers);
exports.UsersRoute.get("/api/users/:id", users_controllers_1.getUsersById);
exports.UsersRoute.post("/api/users", users_controllers_1.postUser);
exports.UsersRoute.put("/api/users/:id", users_controllers_1.putUser);
exports.UsersRoute.delete("/api/users/:id", users_controllers_1.deleteUser);
