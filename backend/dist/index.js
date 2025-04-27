"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_source_1 = require("shared-orm-library/src/data-source");
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
data_source_1.AppDataSource.initialize().then(() => {
    console.log('Connected to DB');
    app.use('/users', userRoutes_1.default);
    app.listen(3001, () => {
        console.log('Server running at http://localhost:3001');
    });
}).catch((error) => console.error('DB Connection Error', error));
