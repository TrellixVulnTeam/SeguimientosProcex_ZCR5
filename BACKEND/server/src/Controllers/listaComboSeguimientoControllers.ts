import { Request, Response } from "express";
import listaComboSeguimientos from '../dao/listaComboSeguimiento';

class ListaComboSeguimientoControllers {
    public async cargarMedio(req: Request, res: Response) {
        var datos = await listaComboSeguimientos.cargarMedio();
        res.json(datos);
    }

    public async cargarTipoRequerimiento(req: Request, res: Response) {
        var datos = await listaComboSeguimientos.cargarTipoRequerimiento();
        res.json(datos);
    }

    public async cargarCategoria(req: Request, res: Response) {
        var datos = await listaComboSeguimientos.cargarCategoria();
        res.json(datos);
    }

    public async cargarEstado(req: Request, res: Response) {
        var datos = await listaComboSeguimientos.cargarEstado();
        res.json(datos);
    }

    public async cargarPerfil(req: Request, res: Response) {
        var datos = await listaComboSeguimientos.cargarPerfil();
        res.json(datos);
    }

    public async cargarPestador(req: Request, res: Response) {
        var datos = await listaComboSeguimientos.cargarPrestador();
        res.json(datos);
    }

    
}

export const listaComboSeguimientoControllers = new ListaComboSeguimientoControllers();