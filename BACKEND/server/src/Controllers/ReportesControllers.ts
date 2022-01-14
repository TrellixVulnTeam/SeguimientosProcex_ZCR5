import { Request, Response } from "express";
import Reportes from '../dao/reportes';

class ReportesControllers {

    public async cargarReporteCasosPorPerfil(req: Request, res: Response) {
        const { ID_PERFIL } = req.params;
        var datos = await Reportes.cargarReporteCasosPorPerfil(ID_PERFIL)
        res.json(datos);
    }

    public async cargarReporteCasosPorUsuarios(req: Request, res: Response) {
        const { ID_PERFIL, ID_REGISTRO } = req.body;
        var datos = await Reportes.cargarReporteCasosPorUsuarios(ID_PERFIL, ID_REGISTRO)
        res.json(datos);
    }

    public async cargarReportePerfilDesarrollo(req: Request, res: Response) {
        const { ID_REGISTRO } = req.body;
        var datos = await Reportes.cargarReportePerfilDesarrollo(ID_REGISTRO)
        res.json(datos);
    }
    public async cargarReportePerfilAnalista(req: Request, res: Response) {
        const { ID_REGISTRO } = req.body;
        var datos = await Reportes.cargarReportePerfilAnalista(ID_REGISTRO)
        res.json(datos);
    }
    public async cargarReportePerfilSoporte(req: Request, res: Response) {
        const { ID_REGISTRO } = req.body;
        var datos = await Reportes.cargarReportePerfilSoporte(ID_REGISTRO)
        res.json(datos);
    }
    public async cargarReportePerfilAdminD(req: Request, res: Response) {
        var datos = await Reportes.cargarReportePerfilAdminD()
        res.json(datos);
    }
    public async cargarReportePerfilAdminJ(req: Request, res: Response) {
        var datos = await Reportes.cargarReportePerfilAdminJ()
        res.json(datos);
    }

    public async cargarReportePerfilCoordinadorSoporte(req: Request, res: Response) {
        var datos = await Reportes.cargarReportePerfilcoordinadorSoporte()
        res.json(datos);
    }

}

export const reportesControllers = new ReportesControllers();