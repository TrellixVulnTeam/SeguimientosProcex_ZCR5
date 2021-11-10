"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ReportesControllers_1 = require("../Controllers/ReportesControllers");
const validateToken_1 = require("../lib/validateToken");
class ReportesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.use(validateToken_1.Tokenvalidation);
        this.router.get('/:ID_PERFIL', ReportesControllers_1.reportesControllers.cargarReporteCasosPorPerfil);
        this.router.post('/desarrollo', ReportesControllers_1.reportesControllers.cargarReportePerfilDesarrollo);
        this.router.post('/analista/analista', ReportesControllers_1.reportesControllers.cargarReportePerfilAnalista);
        this.router.post('/soporte/soporte', ReportesControllers_1.reportesControllers.cargarReportePerfilSoporte);
        this.router.post('/reporte/usuarios', ReportesControllers_1.reportesControllers.cargarReporteCasosPorUsuarios);
        this.router.get('/adminD/adminD', ReportesControllers_1.reportesControllers.cargarReportePerfilAdminD);
        this.router.get('/adminJ/adminJ', ReportesControllers_1.reportesControllers.cargarReportePerfilAdminJ);
        this.router.get('/coorSoporte/coorSoporte', ReportesControllers_1.reportesControllers.cargarReportePerfilCoordinadorSoporte);
    }
}
const reportesRoutes = new ReportesRoutes();
exports.default = reportesRoutes.router;
