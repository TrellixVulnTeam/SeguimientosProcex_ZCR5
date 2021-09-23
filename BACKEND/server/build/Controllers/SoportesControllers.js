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
exports.soportesControllers = void 0;
const soportes_1 = __importDefault(require("../dao/soportes"));
class SoportesControllers {
    GuardarSoporte(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var almacenar = yield soportes_1.default.GuardarSoporte(req.body, req);
            res.json(almacenar);
        });
    }
    Cargarsoporte(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombreArchivo, tipoArchivo, ID_GESTION_SEGUIMIENTO, page, row } = req.body;
            console.log(req.body);
            const pagina = row * page;
            var datos = yield soportes_1.default.Cargarsoporte(nombreArchivo, tipoArchivo, ID_GESTION_SEGUIMIENTO, pagina, row);
            res.json(datos);
        });
    }
}
exports.soportesControllers = new SoportesControllers();
