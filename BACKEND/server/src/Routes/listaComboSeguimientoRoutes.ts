import { Router } from 'express';
import { listaComboSeguimientoControllers } from '../Controllers/listaComboSeguimientoControllers';
import { Tokenvalidation } from '../lib/validateToken';

class ListaComboSeguimientoRoutes {
    public router: Router = Router()
    constructor() {
        this.config();
    }
    
    config(): void {
        this.router.use(Tokenvalidation)
        this.router.get('/medio', listaComboSeguimientoControllers.cargarMedio);
        this.router.get('/tipoR', listaComboSeguimientoControllers.cargarTipoRequerimiento);
        this.router.get('/categoria', listaComboSeguimientoControllers.cargarCategoria);
        this.router.get('/estado', listaComboSeguimientoControllers.cargarEstado);
        this.router.get('/perfil', listaComboSeguimientoControllers.cargarPerfil);
        this.router.get('/prestador', listaComboSeguimientoControllers.cargarPestador);
    }
}

const listaComboSeguimientoRoutes = new ListaComboSeguimientoRoutes()
export default listaComboSeguimientoRoutes.router
