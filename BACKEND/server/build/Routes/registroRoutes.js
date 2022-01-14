"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RegistroControllers_1 = require("../Controllers/RegistroControllers");
const validateToken_1 = require("../lib/validateToken");
class RegistroRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.use(validateToken_1.Tokenvalidation);
        this.router.post('/registrar', RegistroControllers_1.registroControllers.registrar);
        this.router.post('/usuario', RegistroControllers_1.registroControllers.crearUsuario);
        this.router.get('/:usuario', RegistroControllers_1.registroControllers.listarDatosUsuarios);
        this.router.get('/perfil/:ID_REGISTRO', RegistroControllers_1.registroControllers.CargarPerfil);
        this.router.get('/listar/usuario', RegistroControllers_1.registroControllers.listarDatosRegistro);
        this.router.get('/responsable/:ID_PERFIL', RegistroControllers_1.registroControllers.listarResponsableSeguimiento);
        this.router.get('/listar/responsable', RegistroControllers_1.registroControllers.cargarResponsableSeguimientoGest);
        this.router.delete('/registro/:ID_REGISTRO', RegistroControllers_1.registroControllers.eliminarRegistro);
        this.router.delete('/usuario/:ID_REGISTRO', RegistroControllers_1.registroControllers.eliminarUsuario);
        this.router.put('/usuario/:ID_REGISTRO', RegistroControllers_1.registroControllers.actualizarRegistro);
        this.router.post('/rcontrasena', RegistroControllers_1.registroControllers.resetearContraseña);
        this.router.post('/cContrasena/user', RegistroControllers_1.registroControllers.cambiarContrasena);
    }
}
const registroRoutes = new RegistroRoutes();
exports.default = registroRoutes.router;
