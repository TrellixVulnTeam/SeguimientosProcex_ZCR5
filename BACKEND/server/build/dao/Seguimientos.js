"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class Seguimientos {
    static cargarTodos(EPS, TIPO_REQUERIMIENTO, ESTADO, FECHA_FINALIZACION, ID_REGISTRO, TITULO_REQUERIMIENTO, page, row) {
        return new Promise(function (resolev, reject) {
            try {
                var query = "SELECT S.ID_SEGUIMIENTOS, S.EPS, S.FECHA_REQUERIMIENTO, S.MEDIO, S.TIPO_REQUERIMIENTO, S.TITULO_REQUERIMIENTO, S.DESCRIPCION_REQUERIMIENTO, S.AREA_VALIDACION, ";
                query += "S.ESTADO, S.FECHA_ENTREGA, S.FECHA_FINALIZACION, S.SEGUIMIENTO, RUTA_SOPORTES, S.Categoria, S.ID_REGISTRO, R.Nombres, R.Apellidos,P.DESCRIPCION as Area, S.ID_PERFIL, S.Dias_Entrega ";
                query += "from seguimientos S left join registro R on R.ID_REGISTRO = S.ID_REGISTRO inner join perfil P on P.ID_PERFIL = S.ID_PERFIL ";
                query += "where S.EPS LIKE '%" + EPS + "%' and S.TIPO_REQUERIMIENTO LIKE '%" + TIPO_REQUERIMIENTO + "%' and S.ESTADO LIKE '%" + ESTADO + "%' and S.FECHA_FINALIZACION LIKE '%" + FECHA_FINALIZACION + "%' and S.ID_REGISTRO LIKE '%" + ID_REGISTRO + "%' and S.TITULO_REQUERIMIENTO LIKE '%" + TITULO_REQUERIMIENTO + "%' order by field(ESTADO,'Pendiente','En proceso','Sin asignar','Realizado')asc limit ?,? ";
                database_1.default.query(query, [page, row], function (err, result, fields) {
                    if (err)
                        throw err;
                    resolev(result);
                });
            }
            catch (error) {
                // res.status(404).json({ error: 'No se obtuvieron datos' });
            }
            ;
        });
    }
    static cargarSeguimientoPorPerfil(EPS, TIPO_REQUERIMIENTO, ESTADO, ID_REGISTRO, TITULO_REQUERIMIENTO, page, row, ID_PERFIL, USUARIO) {
        return new Promise(function (resolev, reject) {
            try {
                var query = "SELECT S.ID_SEGUIMIENTOS, S.EPS, S.FECHA_REQUERIMIENTO, S.MEDIO, S.TIPO_REQUERIMIENTO, S.TITULO_REQUERIMIENTO, S.DESCRIPCION_REQUERIMIENTO, S.AREA_VALIDACION, ";
                query += "S.ESTADO, S.FECHA_ENTREGA, S.FECHA_FINALIZACION, S.SEGUIMIENTO, RUTA_SOPORTES, S.Categoria, S.ID_REGISTRO, R.Nombres, R.Apellidos, S.ID_PERFIL, S.Dias_Entrega ";
                query += "from seguimientos S left join registro R on R.ID_REGISTRO = S.ID_REGISTRO left join usuario U on U.ID_REGISTRO = R.ID_REGISTRO ";
                query += "where S.ID_PERFIL = ? and u.USUARIO = ? or  S.ID_REGISTRO = '' and S.EPS LIKE '%" + EPS + "%' and S.TIPO_REQUERIMIENTO LIKE '%" + TIPO_REQUERIMIENTO + "%' and S.ESTADO LIKE '%" + ESTADO + "%' and S.ID_REGISTRO LIKE '%" + ID_REGISTRO + "%' and S.TITULO_REQUERIMIENTO LIKE '%" + TITULO_REQUERIMIENTO + "%' order by field(ESTADO,'Pendiente','En proceso','Sin asignar','Realizado')asc limit ?,? ";
                database_1.default.query(query, [ID_PERFIL, USUARIO, page, row], function (err, result, fields) {
                    if (err)
                        throw err;
                    resolev(result);
                });
            }
            catch (error) {
                // res.status(404).json({ error: 'No se obtuvieron datos' });
            }
            ;
        });
    }
    static getNumeroRegistro() {
        return new Promise(function (resolev, reject) {
            try {
                const Clientes = database_1.default.query("select count(0) as numero_registro from seguimientos", function (err, result, fields) {
                    if (err)
                        throw err;
                    resolev(result);
                });
            }
            catch (error) {
                // res.status(404).json({ error: 'No se obtuvieron Datos' });
            }
            ;
        });
    }
    static guardarDatos(newDatos) {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query('insert into SEGUIMIENTOS set ?', newDatos, function (err, result, fields) {
                    if (err)
                        throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            }
            ;
        });
    }
    static actualizarSeguimiento(newDatos, ID_SEGUIMIENTOS) {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query('UPDATE seguimientos set ? where seguimientos.ID_SEGUIMIENTOS = ? ', [newDatos, ID_SEGUIMIENTOS], function (err, result, fields) {
                    if (err)
                        throw err;
                    resolev(result);
                });
            }
            catch (error) {
                // res.status(404).json({ error: 'No se pudieron almacenar datos' });
            }
            ;
        });
    }
    static cargarSeguimiento(ID_SEGUIMIENTOS) {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query('select * from  seguimientos  where seguimientos.ID_SEGUIMIENTOS = ? ', [ID_SEGUIMIENTOS], function (err, result, fields) {
                    if (err)
                        throw err;
                    resolev(result);
                });
            }
            catch (error) {
                // res.status(404).json({ error: 'No se pudieron almacenar datos' });
            }
            ;
        });
    }
    static exportarSeguimiento(EPS, TIPO_REQUERIMIENTO, ESTADO, FECHA_FINALIZACION, ID_REGISTRO) {
        return new Promise(function (resolev, reject) {
            try {
                var query = "SELECT seguimientos.EPS, seguimientos.FECHA_REQUERIMIENTO, seguimientos.MEDIO, seguimientos.TIPO_REQUERIMIENTO, seguimientos.TITULO_REQUERIMIENTO, seguimientos.DESCRIPCION_REQUERIMIENTO, ";
                query += "seguimientos.AREA_VALIDACION, seguimientos.ESTADO, seguimientos.FECHA_ENTREGA, seguimientos.FECHA_FINALIZACION,seguimientos.Categoria, seguimientos.USUARIO_CREACION,registro.Nombres as Responsable, ";
                query += "gestion_seguimiento.DESCRIPCION as DESCRIPCION_GESTION,gestion_seguimiento.USUARIO_CREACION as USUARIO_CREACION_GESTION ,gestion_seguimiento.FECHA_CREACION as FECHA_CREACION_GESTION ";
                query += "FROM seguimientos ";
                query += "left join gestion_seguimiento on seguimientos.ID_SEGUIMIENTOS = gestion_seguimiento.ID_SEGUIMIENTOS left join registro on registro.ID_REGISTRO = seguimientos.ID_REGISTRO ";
                query += "where seguimientos.EPS LIKE '%" + EPS + "%' and seguimientos.TIPO_REQUERIMIENTO LIKE '%" + TIPO_REQUERIMIENTO + "%' and seguimientos.ESTADO LIKE '%" + ESTADO + "%' and seguimientos.FECHA_FINALIZACION LIKE '%" + FECHA_FINALIZACION + "%' and seguimientos.ID_REGISTRO LIKE '%" + ID_REGISTRO + "%' order by field(ESTADO,'Pendiente','En proceso','Sin asignar','Realizado') ";
                database_1.default.query(query, function (err, result, fields) {
                    if (err)
                        throw err;
                    resolev(result);
                });
            }
            catch (error) {
                // res.status(404).json({ error: 'No se obtuvieron datos' });
            }
            ;
        });
    }
}
exports.default = Seguimientos;
