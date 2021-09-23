import { Request, Response } from "express";
import GestionSeguimiento from '../dao/gestionSeguimiento';

class GestionSeguimientoControllers {
    public async cargarGestion(req: Request, res: Response) {
        const {ID_SEGUIMIENTOS} = req.params;
        var datos = await GestionSeguimiento.cargarGestion(ID_SEGUIMIENTOS);
        res.json(datos);
    }
    
    public async guardarGestion(req: Request, res: Response) {
        var datos = await GestionSeguimiento.guardarGestion(req.body);
        res.json(datos);
    }

    public async actualizarGestion(req: Request, res: Response) {
        const {ID_GESTION_SEGUIMIENTO} = req.params
        var actualizar = await GestionSeguimiento.actualizarGestion(req.body,ID_GESTION_SEGUIMIENTO)
        res.json(actualizar);
      }
}

export const gestionSeguimientoControllers = new GestionSeguimientoControllers();