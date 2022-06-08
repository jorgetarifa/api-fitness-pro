"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.usuarioSchema = joi_1.default.object({
    nombres: joi_1.default.string().required(),
    apellidos: joi_1.default.string().required(),
    cedula: joi_1.default.string().required()
});
