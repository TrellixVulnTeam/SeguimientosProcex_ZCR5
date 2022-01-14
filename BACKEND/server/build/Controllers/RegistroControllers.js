"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registroControllers = void 0;
const registro_1 = __importDefault(require("../dao/registro"));
const notificarSeguimientoPorEmail_1 = __importDefault(require("../Logica/notificarSeguimientoPorEmail"));
class RegistroControllers {
    registrar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var datos = yield registro_1.default.registrar(req.body);
            res.json(datos);
        });
    }
    crearUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var datos = yield registro_1.default.crearUsuario(req.body);
            res.json(datos);
        });
    }
    listarDatosUsuarios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { usuario } = req.params;
            const datos = yield registro_1.default.datosUsuario(usuario);
            res.json(datos);
        });
    }
    listarDatosRegistro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datos = yield registro_1.default.cargarRegistro();
            res.json(datos);
        });
    }
    listarResponsableSeguimiento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ID_PERFIL } = req.params;
            const datos = yield registro_1.default.cargarResponsableSeguimiento(ID_PERFIL);
            res.json(datos);
        });
    }
    cargarResponsableSeguimientoGest(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datos = yield registro_1.default.cargarResponsableSeguimientoGest();
            res.json(datos);
        });
    }
    eliminarRegistro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ID_REGISTRO } = req.params;
            const datos = yield registro_1.default.eliminarRegistro(ID_REGISTRO);
            res.json(datos);
        });
    }
    eliminarUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ID_REGISTRO } = req.params;
            const datos = yield registro_1.default.eliminarUsuario(ID_REGISTRO);
            res.json(datos);
        });
    }
    actualizarRegistro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ID_REGISTRO } = req.params;
            const datos = yield registro_1.default.actualizarRegistro(req.body, ID_REGISTRO);
            res.json(datos);
        });
    }
    CargarPerfil(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ID_REGISTRO } = req.params;
            const datos = yield registro_1.default.cargarPerfil(ID_REGISTRO);
            res.json(datos);
        });
    }
    resetearContraseña(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datos = yield registro_1.default.resetearContraseña(req.body);
            if (datos == 'Usuario o correo invalidos') {
                res.status(404).json({ text: "Usuario y/o correo invalido" });
            }
            else {
                notificarSeguimientoPorEmail_1.default.notificarSeguimiento(datos);
                res.json(datos);
            }
        });
    }
    cambiarContrasena(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { newDatos, USUARIO, Contrasena } = req.body;
            const datos = yield registro_1.default.cambiarContrasena(newDatos, USUARIO, Contrasena);
            if (datos == 'Contraseña no valida' || datos == 'Usuario no valido') {
                res.status(404).json({ text: "Usuario y/o Contraseña incorrecto" });
            }
            else {
                res.json(datos);
            }
        });
    }
}
exports.registroControllers = new RegistroControllers();
