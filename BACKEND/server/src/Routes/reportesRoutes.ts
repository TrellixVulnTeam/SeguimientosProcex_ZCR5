import { Router } from 'express';
import { reportesControllers } from '../Controllers/ReportesControllers';

class ReportesRoutes {
    public router: Router = Router()
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/:ID_PERFIL', reportesControllers.cargarReporteCasosPorPerfil);
        this.router.post('/desarrollo', reportesControllers.cargarReportePerfilDesarrollo);
        this.router.post('/analista/analista', reportesControllers.cargarReportePerfilAnalista);
        this.router.post('/soporte/soporte', reportesControllers.cargarReportePerfilSoporte);
        this.router.get('/adminD/adminD', reportesControllers.cargarReportePerfilAdminD);
        this.router.get('/adminJ/adminJ', reportesControllers.cargarReportePerfilAdminJ);
        this.router.get('/coorSoporte/coorSoporte', reportesControllers.cargarReportePerfilCoordinadorSoporte);
    }

}

const reportesRoutes = new ReportesRoutes()
export default reportesRoutes.router