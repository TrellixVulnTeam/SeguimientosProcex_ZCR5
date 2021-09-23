import { Request, Response } from "express";
import Seguimientos from '../dao/Seguimientos';
import notificarSeguimientoPorEmail from '../Logica/notificarSeguimientoPorEmail';

class SeguimientosControllers {
  public async CargarDatos(req: Request, res: Response) {
    const { EPS, TIPO_REQUERIMIENTO, ESTADO, ID_REGISTRO, page, row } = req.body;
    const pagina = row * page
    var datos = await Seguimientos.cargarTodos(EPS, TIPO_REQUERIMIENTO, ESTADO, ID_REGISTRO, pagina, row);
    console.log(datos)
    res.json(datos);
  }

  public async cararDatosPorPerfil(req: Request, res: Response) {
    const { EPS, TIPO_REQUERIMIENTO, ESTADO, ID_REGISTRO, page, row, ID_PERFIL } = req.body;
    const pagina = row * page
    var datos = await Seguimientos.cargarSeguimientoPorPerfil(EPS, TIPO_REQUERIMIENTO, ESTADO, ID_REGISTRO, pagina, row, ID_PERFIL);
    res.json(datos);
  }

  public async getNumeroRegistro(req: Request, res: Response) {
    var datos = await Seguimientos.getNumeroRegistro()
    res.json(datos[0].numero_registro);
  }

  public async guardarDatos(req: Request, res: Response) {
    // var almacenar = await Seguimientos.guardarDatos(req.body)
     notificarSeguimientoPorEmail.notificarSeguimiento(req.body)
    res.json('...');
  }

  public async actualizarSeguimiento(req: Request, res: Response) {
    const { ID_SEGUIMIENTOS } = req.params
    var actualizar = await Seguimientos.actualizarSeguimiento(req.body, ID_SEGUIMIENTOS)
    res.json(actualizar);
  }


}

export const seguimientosControllers = new SeguimientosControllers();