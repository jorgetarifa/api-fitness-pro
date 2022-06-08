"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootRoute = void 0;
const express_1 = require("express");
exports.RootRoute = (0, express_1.Router)();
exports.RootRoute.get('/', (req, res) => {
    res.send('Welcome to Fitness Pro!');
});
