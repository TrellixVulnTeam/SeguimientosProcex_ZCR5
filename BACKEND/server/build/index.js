"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./Routes/indexRoutes"));
const SeguimientosRoutes_1 = __importDefault(require("./Routes/SeguimientosRoutes"));
const listaComboSeguimientoRoutes_1 = __importDefault(require("./Routes/listaComboSeguimientoRoutes"));
const registroRoutes_1 = __importDefault(require("./Routes/registroRoutes"));
const loginRoutes_1 = __importDefault(require("./Routes/loginRoutes"));
const gestionSeguimientosRoutes_1 = __importDefault(require("./Routes/gestionSeguimientosRoutes"));
const SoportesRoutes_1 = __importDefault(require("./Routes/SoportesRoutes"));
const reportesRoutes_1 = __importDefault(require("./Routes/reportesRoutes"));
const path_1 = __importDefault(require("path"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/seguimientos', SeguimientosRoutes_1.default);
        this.app.use('/api/listacomboseguimiento', listaComboSeguimientoRoutes_1.default);
        this.app.use('/api/registrar', registroRoutes_1.default);
        this.app.use('/api/login', loginRoutes_1.default);
        this.app.use('/api/gestionseguimiento', gestionSeguimientosRoutes_1.default);
        this.app.use('/api/reportes', reportesRoutes_1.default);
        this.app.use('/api/soportes', SoportesRoutes_1.default);
        this.app.use('/soportes', express_1.default.static(path_1.default.resolve('soportes')));
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
