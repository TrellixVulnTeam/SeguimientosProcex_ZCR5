"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gestionSeguimientoControllers_1 = require("../Controllers/gestionSeguimientoControllers");
const validateToken_1 = require("../lib/validateToken");
class GestionSeguimientosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.use(validateToken_1.Tokenvalidation);
        this.router.get('/:ID_SEGUIMIENTOS', gestionSeguimientoControllers_1.gestionSeguimientoControllers.cargarGestion);
        this.router.post('/', gestionSeguimientoControllers_1.gestionSeguimientoControllers.guardarGestion);
        this.router.put('/:ID_GESTION_SEGUIMIENTO', gestionSeguimientoControllers_1.gestionSeguimientoControllers.actualizarGestion);
    }
}
const gestionSeguimientosRoutes = new GestionSeguimientosRoutes();
exports.default = gestionSeguimientosRoutes.router;
