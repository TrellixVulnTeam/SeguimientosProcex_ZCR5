import { Request, Response } from "express";
import Seguimientos from '../dao/Seguimientos';

// import notificarSeguimientoPorEmail from '../Logica/notificarSeguimientoPorEmail';

class SeguimientosControllers {
  public async CargarDatos(req: Request, res: Response) {
    const { EPS, TIPO_REQUERIMIENTO, ESTADO, FECHA_FINALIZACION, ID_REGISTRO, TITULO_REQUERIMIENTO, page, row } = req.body;
    const pagina = row * page
    var datos = await Seguimientos.cargarTodos(EPS, TIPO_REQUERIMIENTO, ESTADO, FECHA_FINALIZACION, ID_REGISTRO, TITULO_REQUERIMIENTO, pagina, row);
    res.json(datos);
  }

  public async cararDatosPorPerfil(req: Request, res: Response) {
    const { EPS, TIPO_REQUERIMIENTO, ESTADO, ID_REGISTRO, TITULO_REQUERIMIENTO, page, row, ID_PERFIL,USUARIO } = req.body;
    const pagina = row * page
    var datos = await Seguimientos.cargarSeguimientoPorPerfil(EPS, TIPO_REQUERIMIENTO, ESTADO, ID_REGISTRO, TITULO_REQUERIMIENTO, pagina, row, ID_PERFIL,USUARIO);
    res.json(datos);
  }

  public async getNumeroRegistro(req: Request, res: Response) {
    var datos = await Seguimientos.getNumeroRegistro()
    res.json(datos[0].numero_registro);
  }

  public async guardarDatos(req: Request, res: Response) {
    var almacenar = await Seguimientos.guardarDatos(req.body)
    //  notificarSeguimientoPorEmail.notificarSeguimiento(req.body)
    res.json(almacenar);
  }

  public async actualizarSeguimiento(req: Request, res: Response) {
    const { ID_SEGUIMIENTOS } = req.params
    var actualizar = await Seguimientos.actualizarSeguimiento(req.body, ID_SEGUIMIENTOS)
    res.json(actualizar);
  }

  public async cargarSeguimeintos(req: Request, res: Response) {
    const { ID_SEGUIMIENTOS } = req.params
    var result = await Seguimientos.cargarSeguimiento(ID_SEGUIMIENTOS)
    res.json(result);
  }

  public async exportarSeguimientos(req: Request, res: Response) {
    const { EPS, TIPO_REQUERIMIENTO, ESTADO, FECHA_FINALIZACION, ID_REGISTRO } = req.body;
    var result = await Seguimientos.exportarSeguimiento(EPS, TIPO_REQUERIMIENTO, ESTADO, FECHA_FINALIZACION, ID_REGISTRO );
    res.json(result);
  }

}

export const seguimientosControllers = new SeguimientosControllers();