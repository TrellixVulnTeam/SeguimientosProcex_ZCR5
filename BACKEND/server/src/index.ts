import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './Routes/indexRoutes';
import seguimientosRoutes from './Routes/SeguimientosRoutes';
import listaComboSeguimientoRoutes from './Routes/listaComboSeguimientoRoutes';
import registroRoutes from './Routes/registroRoutes';
import loginRoutes from './Routes/loginRoutes';
import gestionSeguimientosRoutes from './Routes/gestionSeguimientosRoutes';
import soportesRoutes from './Routes/SoportesRoutes';
import reportesRoutes from './Routes/reportesRoutes';
import paht from 'path';

class Server {

    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    routes(): void {
        
        this.app.use(indexRoutes);
        this.app.use('/api/seguimientos',seguimientosRoutes)
        this.app.use('/api/listacomboseguimiento',listaComboSeguimientoRoutes)
        this.app.use('/api/registrar',registroRoutes)
        this.app.use('/api/login',loginRoutes)
        this.app.use('/api/gestionseguimiento',gestionSeguimientosRoutes)
        this.app.use('/api/reportes',reportesRoutes)
        this.app.use('/api/soportes', soportesRoutes);
        this.app.use('/soportes', express.static(paht.resolve('soportes')));
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server()
server.start();



