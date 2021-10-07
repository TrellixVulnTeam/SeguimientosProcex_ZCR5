import { Request, Response } from "express";
import registro from '../dao/registro';

class RegistroControllers {

    public async registrar(req: Request, res: Response) {
        var datos = await registro.registrar(req.body)
        res.json(datos);
    }

    public async crearUsuario(req: Request, res: Response) {
        var datos = await registro.crearUsuario(req.body)
        res.json(datos);
    }

    public async listarDatosUsuarios(req: Request, res: Response) {
        const { usuario } = req.params;
        const datos = await registro.datosUsuario(usuario);
        res.json(datos);
    }

    public async listarDatosRegistro(req: Request, res: Response) {
        const datos = await registro.cargarRegistro();
        res.json(datos);
    }

    public async listarResponsableSeguimiento(req: Request, res: Response) {
        const {ID_PERFIL} = req.params;
        const datos = await registro.cargarResponsableSeguimiento(ID_PERFIL);
        res.json(datos);
    }

    public async cargarResponsableSeguimientoGest(req: Request, res: Response) {
        const datos = await registro.cargarResponsableSeguimientoGest();
        res.json(datos);
    }
    
    public async eliminarRegistro(req: Request, res: Response) {
        const { ID_REGISTRO } = req.params;
        const datos = await registro.eliminarRegistro(ID_REGISTRO);
        res.json(datos);
    }

    public async eliminarUsuario(req: Request, res: Response) {
        const { ID_REGISTRO } = req.params;
        const datos = await registro.eliminarUsuario(ID_REGISTRO);
        res.json(datos);
    }

}


export const registroControllers = new RegistroControllers();