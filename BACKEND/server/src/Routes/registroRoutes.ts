import { Router } from 'express';
import { registroControllers } from '../Controllers/RegistroControllers';

class RegistroRoutes {
    public router: Router = Router()
    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/registrar', registroControllers.registrar);
        this.router.post('/usuario', registroControllers.crearUsuario);
        this.router.get('/:usuario', registroControllers.listarDatosUsuarios);
        this.router.get('/listar/usuario', registroControllers.listarDatosRegistro);
        this.router.get('/responsable/:ID_PERFIL', registroControllers.listarResponsableSeguimiento);
        this.router.get('/listar/responsable', registroControllers.cargarResponsableSeguimientoGest);
        this.router.delete('/registro/:ID_REGISTRO', registroControllers.eliminarRegistro);
        this.router.delete('/usuario/:ID_REGISTRO', registroControllers.eliminarUsuario);
    }

}

const registroRoutes = new RegistroRoutes()
export default registroRoutes.router