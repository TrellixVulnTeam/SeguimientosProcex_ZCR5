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
exports.gestionSeguimientoControllers = void 0;
const gestionSeguimiento_1 = __importDefault(require("../dao/gestionSeguimiento"));
class GestionSeguimientoControllers {
    cargarGestion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ID_SEGUIMIENTOS } = req.params;
            var datos = yield gestionSeguimiento_1.default.cargarGestion(ID_SEGUIMIENTOS);
            res.json(datos);
        });
    }
    guardarGestion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var datos = yield gestionSeguimiento_1.default.guardarGestion(req.body);
            res.json(datos);
        });
    }
    actualizarGestion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ID_GESTION_SEGUIMIENTO } = req.params;
            var actualizar = yield gestionSeguimiento_1.default.actualizarGestion(req.body, ID_GESTION_SEGUIMIENTO);
            res.json(actualizar);
        });
    }
}
exports.gestionSeguimientoControllers = new GestionSeguimientoControllers();
