import { Request, Response } from 'express'
import  soportes  from '../dao/soportes'

class SoportesControllers{
    public async GuardarSoporte(req: Request, res: Response) {
        var almacenar = await soportes.GuardarSoporte(req.body,req)
        res.json(almacenar);
      }

      public async Cargarsoporte(req: Request, res: Response) {
        const {nombreArchivo,tipoArchivo,ID_GESTION_SEGUIMIENTO,page, row} = req.body;
        console.log(req.body)
        const pagina = row * page
        var datos = await soportes.Cargarsoporte(nombreArchivo,tipoArchivo,ID_GESTION_SEGUIMIENTO,pagina, row);
        res.json(datos);
    }
   

}

export const  soportesControllers = new SoportesControllers();