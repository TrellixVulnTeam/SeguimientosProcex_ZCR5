import { Router } from 'express';
import { seguimientosControllers } from '../Controllers/SeguimientosControllers';

class SeguimientosRoutes {
    public router: Router = Router()
    constructor() {
        this.config();
    }
    
    config(): void {
        this.router.post('/', seguimientosControllers.CargarDatos);
        this.router.post('/seguimiento/perfil', seguimientosControllers.cararDatosPorPerfil);
        this.router.post('/almacenar', seguimientosControllers.guardarDatos);
        this.router.put('/:ID_SEGUIMIENTOS', seguimientosControllers.actualizarSeguimiento);
        this.router.get('/', seguimientosControllers.getNumeroRegistro);
    }
}

const seguimientosRoutes = new SeguimientosRoutes()
export default seguimientosRoutes.router
