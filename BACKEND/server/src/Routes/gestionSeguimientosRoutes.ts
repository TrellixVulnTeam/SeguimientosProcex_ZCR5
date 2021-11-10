import { Router } from 'express';
import { gestionSeguimientoControllers } from '../Controllers/gestionSeguimientoControllers';
import { Tokenvalidation } from '../lib/validateToken';

class GestionSeguimientosRoutes {
    public router: Router = Router()
    constructor() {
        this.config();
    }
    
    config(): void {
        this.router.use(Tokenvalidation)
        this.router.get('/:ID_SEGUIMIENTOS', gestionSeguimientoControllers.cargarGestion);
        this.router.post('/', gestionSeguimientoControllers.guardarGestion);
        this.router.put('/:ID_GESTION_SEGUIMIENTO', gestionSeguimientoControllers.actualizarGestion);
    }


}

const gestionSeguimientosRoutes = new GestionSeguimientosRoutes()
export default gestionSeguimientosRoutes.router
