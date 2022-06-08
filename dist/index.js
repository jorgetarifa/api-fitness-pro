"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const users_route_1 = require("./routes/users.route");
const products_route_1 = require("./routes/products.route");
const auth_route_1 = __importDefault(require("./routes/auth.route"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5100;
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: false }));
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Users',
            version: '1.0.0'
        },
        servers: [
            {
                url: `http://localhost:${PORT}`
            }
        ]
    },
    apis: ['./dist/docs/*.js']
};
const swaggerDocs = (0, swagger_jsdoc_1.default)(swaggerOptions);
app.use('/', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocs));
app.use(users_route_1.UsersRoute);
app.use(products_route_1.RouterProduct);
app.use(auth_route_1.default);
app.listen(PORT, () => console.log(`Running on: http://localhost:${PORT}`));
