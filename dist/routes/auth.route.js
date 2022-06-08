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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../firebase/auth"));
const joiValidator_1 = require("../helpers/joiValidator");
const auth_schema_1 = require("../schemas/auth.schema");
const authRouter = express_1.default.Router();
authRouter.post('/createUser', joiValidator_1.validator.body(auth_schema_1.authSchema), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const result = yield auth_1.default.createUser(email, password);
        res.status(201).send(result);
    }
    catch (error) {
        return res.send(error);
    }
}));
authRouter.post('/login', joiValidator_1.validator.body(auth_schema_1.authSchema), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const result = yield auth_1.default.logIn(email, password);
        res.status(201).send(result);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
exports.default = authRouter;
