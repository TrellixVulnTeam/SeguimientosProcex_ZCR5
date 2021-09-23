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
            const datos = yield registro_1.default.cargarResponsableSeguimiento();
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
}
exports.registroControllers = new RegistroControllers();
