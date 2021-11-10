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
exports.reportesControllers = void 0;
const reportes_1 = __importDefault(require("../dao/reportes"));
class ReportesControllers {
    cargarReporteCasosPorPerfil(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ID_PERFIL } = req.params;
            var datos = yield reportes_1.default.cargarReporteCasosPorPerfil(ID_PERFIL);
            res.json(datos);
        });
    }
    cargarReporteCasosPorUsuarios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ID_PERFIL, ID_REGISTRO } = req.body;
            var datos = yield reportes_1.default.cargarReporteCasosPorUsuarios(ID_PERFIL, ID_REGISTRO);
            res.json(datos);
        });
    }
    cargarReportePerfilDesarrollo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ID_REGISTRO } = req.body;
            var datos = yield reportes_1.default.cargarReportePerfilDesarrollo(ID_REGISTRO);
            res.json(datos);
        });
    }
    cargarReportePerfilAnalista(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ID_REGISTRO } = req.body;
            var datos = yield reportes_1.default.cargarReportePerfilAnalista(ID_REGISTRO);
            res.json(datos);
        });
    }
    cargarReportePerfilSoporte(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ID_REGISTRO } = req.body;
            var datos = yield reportes_1.default.cargarReportePerfilSoporte(ID_REGISTRO);
            res.json(datos);
        });
    }
    cargarReportePerfilAdminD(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var datos = yield reportes_1.default.cargarReportePerfilAdminD();
            res.json(datos);
        });
    }
    cargarReportePerfilAdminJ(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var datos = yield reportes_1.default.cargarReportePerfilAdminJ();
            res.json(datos);
        });
    }
    cargarReportePerfilCoordinadorSoporte(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var datos = yield reportes_1.default.cargarReportePerfilcoordinadorSoporte();
            res.json(datos);
        });
    }
}
exports.reportesControllers = new ReportesControllers();
