"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SeguimientosControllers_1 = require("../Controllers/SeguimientosControllers");
class SeguimientosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/', SeguimientosControllers_1.seguimientosControllers.CargarDatos);
        this.router.post('/seguimiento/perfil', SeguimientosControllers_1.seguimientosControllers.cararDatosPorPerfil);
        this.router.post('/almacenar', SeguimientosControllers_1.seguimientosControllers.guardarDatos);
        this.router.put('/:ID_SEGUIMIENTOS', SeguimientosControllers_1.seguimientosControllers.actualizarSeguimiento);
        this.router.get('/', SeguimientosControllers_1.seguimientosControllers.getNumeroRegistro);
    }
}
const seguimientosRoutes = new SeguimientosRoutes();
exports.default = seguimientosRoutes.router;
