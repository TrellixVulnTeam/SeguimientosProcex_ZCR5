"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SoportesControllers_1 = require("../Controllers/SoportesControllers");
const multer_1 = __importDefault(require("../lib/multer"));
const validateToken_1 = require("../lib/validateToken");
class SoportesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.use(validateToken_1.Tokenvalidation);
        this.router.post('/', multer_1.default.single('soporte'), SoportesControllers_1.soportesControllers.GuardarSoporte);
        this.router.post('/soporte', SoportesControllers_1.soportesControllers.Cargarsoporte);
        // this.router.get('/:Documento_hemofilia',soportesControllers.getNumeroRegistro)
    }
}
const soportesRoutes = new SoportesRoutes();
exports.default = soportesRoutes.router;
