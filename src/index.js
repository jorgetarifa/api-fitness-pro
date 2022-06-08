"use strict";
exports.__esModule = true;
var express_1 = require("express");
var morgan_1 = require("morgan");
var dotenv_1 = require("dotenv");
var cors_1 = require("cors");
dotenv_1["default"].config();
var app = (0, express_1["default"])();
var PORT = process.env.PORT || 5100;
app.use((0, morgan_1["default"])('dev'));
app.use(express_1["default"].json());
app.use((0, cors_1["default"])());
app.get('/', function (req, res) {
    res.send('<h1> Welcome to Fitness Pro! </h1>');
});
app.listen(PORT, function () { return console.log("Running on: http://localhost:".concat(PORT)); });
