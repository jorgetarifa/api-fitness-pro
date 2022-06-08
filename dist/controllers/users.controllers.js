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
exports.deleteUser = exports.putUser = exports.postUser = exports.getUsersById = exports.getUsers = void 0;
const postgres_config_1 = require("../services/postgres.config");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getResult = yield postgres_config_1.pool.query('SELECT * FROM users');
        return res.status(200).json(getResult.rows);
    }
    catch (error) {
        return res.status(500).json("Internal Server Error");
    }
});
exports.getUsers = getUsers;
const getUsersById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const getResult = yield postgres_config_1.pool.query('SELECT * FROM users WHERE id = $1', [id]);
        return res.status(200).json(getResult.rows);
    }
    catch (error) {
        return res.status(500).json("Internal Server Error");
    }
});
exports.getUsersById = getUsersById;
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, lastname, email, identity_card } = req.body;
    try {
        const result = yield postgres_config_1.pool.query("INSERT INTO users ( name, lastname,email, identity_card ) VALUES ( $1, $2, $3, $4 ) RETURNING * ", [name, lastname, email, identity_card]);
        return res.json(result.rows[0]);
    }
    catch (error) {
        return res.status(500).json("Error Interno");
    }
});
exports.postUser = postUser;
const putUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { name, lastname, email, identity_card } = req.body;
        const result = yield postgres_config_1.pool.query("UPDATE users SET name = $1, lastname = $2, email = $3, identity_card = $4  WHERE id = $5", [name, lastname, email, identity_card, id]);
        if (result.rowCount > 0) {
            return res.json({
                message: `User with id:${id} has been edited`
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
exports.putUser = putUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield postgres_config_1.pool.query("DELETE FROM users WHERE id = $1", [id]);
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
exports.deleteUser = deleteUser;
