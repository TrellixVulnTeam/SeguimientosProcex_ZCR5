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
const notificarSeguimientoPorEmail_1 = __importDefault(require("../Logica/notificarSeguimientoPorEmail"));
class SeguimientosControllers {
    CargarDatos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { EPS, TIPO_REQUERIMIENTO, ESTADO, ID_REGISTRO, page, row } = req.body;
            const pagina = row * page;
            var datos = yield Seguimientos_1.default.cargarTodos(EPS, TIPO_REQUERIMIENTO, ESTADO, ID_REGISTRO, pagina, row);
            console.log(datos);
            res.json(datos);
        });
    }
    cararDatosPorPerfil(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { EPS, TIPO_REQUERIMIENTO, ESTADO, ID_REGISTRO, page, row, ID_PERFIL } = req.body;
            const pagina = row * page;
            var datos = yield Seguimientos_1.default.cargarSeguimientoPorPerfil(EPS, TIPO_REQUERIMIENTO, ESTADO, ID_REGISTRO, pagina, row, ID_PERFIL);
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
            // var almacenar = await Seguimientos.guardarDatos(req.body)
            notificarSeguimientoPorEmail_1.default.notificarSeguimiento(req.body);
            res.json('...');
        });
    }
    actualizarSeguimiento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ID_SEGUIMIENTOS } = req.params;
            var actualizar = yield Seguimientos_1.default.actualizarSeguimiento(req.body, ID_SEGUIMIENTOS);
            res.json(actualizar);
        });
    }
}
exports.seguimientosControllers = new SeguimientosControllers();
