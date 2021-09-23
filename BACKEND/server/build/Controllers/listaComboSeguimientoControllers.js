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
exports.listaComboSeguimientoControllers = void 0;
const listaComboSeguimiento_1 = __importDefault(require("../dao/listaComboSeguimiento"));
class ListaComboSeguimientoControllers {
    cargarMedio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var datos = yield listaComboSeguimiento_1.default.cargarMedio();
            res.json(datos);
        });
    }
    cargarTipoRequerimiento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var datos = yield listaComboSeguimiento_1.default.cargarTipoRequerimiento();
            res.json(datos);
        });
    }
    cargarCategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var datos = yield listaComboSeguimiento_1.default.cargarCategoria();
            res.json(datos);
        });
    }
    cargarEstado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var datos = yield listaComboSeguimiento_1.default.cargarEstado();
            res.json(datos);
        });
    }
    cargarPerfil(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var datos = yield listaComboSeguimiento_1.default.cargarPerfil();
            res.json(datos);
        });
    }
    cargarPestador(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var datos = yield listaComboSeguimiento_1.default.cargarPrestador();
            res.json(datos);
        });
    }
}
exports.listaComboSeguimientoControllers = new ListaComboSeguimientoControllers();
