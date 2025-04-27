"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./entities/User");
const Settings_1 = require("./entities/Settings");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Laptop@23',
    database: 'My-account',
    synchronize: true,
    logging: false,
    entities: [User_1.User, Settings_1.Settings],
});
