"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loginControllers_1 = require("../Controllers/loginControllers");
class LoginRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/', loginControllers_1.logincontrollers.Login);
    }
}
const loginRoutes = new LoginRoutes();
exports.default = loginRoutes.router;
