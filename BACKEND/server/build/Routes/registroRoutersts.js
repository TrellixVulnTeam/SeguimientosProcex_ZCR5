"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RegistroControllers_1 = require("../Controllers/RegistroControllers");
class RegistroRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/registrar', RegistroControllers_1.registroControllers.registrar);
    }
}
const registroRoutes = new RegistroRoutes();
exports.default = registroRoutes.router;
