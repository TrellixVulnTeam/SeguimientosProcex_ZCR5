"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const listaComboSeguimientoControllers_1 = require("../Controllers/listaComboSeguimientoControllers");
const validateToken_1 = require("../lib/validateToken");
class ListaComboSeguimientoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.use(validateToken_1.Tokenvalidation);
        this.router.get('/medio', listaComboSeguimientoControllers_1.listaComboSeguimientoControllers.cargarMedio);
        this.router.get('/tipoR', listaComboSeguimientoControllers_1.listaComboSeguimientoControllers.cargarTipoRequerimiento);
        this.router.get('/categoria', listaComboSeguimientoControllers_1.listaComboSeguimientoControllers.cargarCategoria);
        this.router.get('/estado', listaComboSeguimientoControllers_1.listaComboSeguimientoControllers.cargarEstado);
        this.router.get('/perfil', listaComboSeguimientoControllers_1.listaComboSeguimientoControllers.cargarPerfil);
        this.router.get('/prestador', listaComboSeguimientoControllers_1.listaComboSeguimientoControllers.cargarPestador);
    }
}
const listaComboSeguimientoRoutes = new ListaComboSeguimientoRoutes();
exports.default = listaComboSeguimientoRoutes.router;
