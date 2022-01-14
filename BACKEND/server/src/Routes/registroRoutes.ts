import { Router } from 'express';
import { registroControllers } from '../Controllers/RegistroControllers';
import { Tokenvalidation } from '../lib/validateToken';

class RegistroRoutes {
    public router: Router = Router()
    constructor() {
        this.config();
    }

    config(): void {
        this.router.use(Tokenvalidation)
        this.router.post('/registrar', registroControllers.registrar);
        this.router.post('/usuario', registroControllers.crearUsuario);
        this.router.get('/:usuario', registroControllers.listarDatosUsuarios);
        this.router.get('/perfil/:ID_REGISTRO', registroControllers.CargarPerfil);
        this.router.get('/listar/usuario', registroControllers.listarDatosRegistro);
        this.router.get('/responsable/:ID_PERFIL', registroControllers.listarResponsableSeguimiento);
        this.router.get('/listar/responsable', registroControllers.cargarResponsableSeguimientoGest);
        this.router.delete('/registro/:ID_REGISTRO', registroControllers.eliminarRegistro);
        this.router.delete('/usuario/:ID_REGISTRO', registroControllers.eliminarUsuario);
        this.router.put('/usuario/:ID_REGISTRO',registroControllers.actualizarRegistro);
        this.router.post('/rcontrasena', registroControllers.resetearContraseña);
        this.router.post('/cContrasena/user', registroControllers.cambiarContrasena);
    }

}

const registroRoutes = new RegistroRoutes()
export default registroRoutes.router