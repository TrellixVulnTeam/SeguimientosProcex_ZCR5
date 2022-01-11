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
exports.seguimientosControllers = void 0;
const Seguimientos_1 = __importDefault(require("../dao/Seguimientos"));
// import notificarSeguimientoPorEmail from '../Logica/notificarSeguimientoPorEmail';
class SeguimientosControllers {
    CargarDatos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { EPS, TIPO_REQUERIMIENTO, ESTADO, FECHA_FINALIZACION, ID_REGISTRO, TITULO_REQUERIMIENTO, page, row } = req.body;
            const pagina = row * page;
            var datos = yield Seguimientos_1.default.cargarTodos(EPS, TIPO_REQUERIMIENTO, ESTADO, FECHA_FINALIZACION, ID_REGISTRO, TITULO_REQUERIMIENTO, pagina, row);
            res.json(datos);
        });
    }
    cararDatosPorPerfil(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { EPS, TIPO_REQUERIMIENTO, ESTADO, ID_REGISTRO, TITULO_REQUERIMIENTO, page, row, ID_PERFIL, USUARIO } = req.body;
            const pagina = row * page;
            var datos = yield Seguimientos_1.default.cargarSeguimientoPorPerfil(EPS, TIPO_REQUERIMIENTO, ESTADO, ID_REGISTRO, TITULO_REQUERIMIENTO, pagina, row, ID_PERFIL, USUARIO);
            res.json(datos);
        });
    }
    getNumeroRegistro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var datos = yield Seguimientos_1.default.getNumeroRegistro();
            res.json(datos[0].numero_registro);
        });
    }
    guardarDatos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var almacenar = yield Seguimientos_1.default.guardarDatos(req.body);
            //  notificarSeguimientoPorEmail.notificarSeguimiento(req.body)
            res.json(almacenar);
        });
    }
    actualizarSeguimiento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ID_SEGUIMIENTOS } = req.params;
            var actualizar = yield Seguimientos_1.default.actualizarSeguimiento(req.body, ID_SEGUIMIENTOS);
            res.json(actualizar);
        });
    }
    cargarSeguimeintos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ID_SEGUIMIENTOS } = req.params;
            var result = yield Seguimientos_1.default.cargarSeguimiento(ID_SEGUIMIENTOS);
            res.json(result);
        });
    }
    exportarSeguimientos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { EPS, TIPO_REQUERIMIENTO, ESTADO, FECHA_FINALIZACION, ID_REGISTRO } = req.body;
            var result = yield Seguimientos_1.default.exportarSeguimiento(EPS, TIPO_REQUERIMIENTO, ESTADO, FECHA_FINALIZACION, ID_REGISTRO);
            res.json(result);
        });
    }
}
exports.seguimientosControllers = new SeguimientosControllers();
