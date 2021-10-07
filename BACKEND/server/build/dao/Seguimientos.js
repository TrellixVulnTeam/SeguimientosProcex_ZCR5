"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class Seguimientos {
    static cargarTodos(EPS, TIPO_REQUERIMIENTO, ESTADO, ID_REGISTRO, page, row) {
        return new Promise(function (resolev, reject) {
            try {
                var query = "SELECT S.ID_SEGUIMIENTOS, S.EPS, S.FECHA_REQUERIMIENTO, S.MEDIO, S.TIPO_REQUERIMIENTO, S.TITULO_REQUERIMIENTO, S.DESCRIPCION_REQUERIMIENTO, S.AREA_VALIDACION, ";
                query += "S.ESTADO, S.FECHA_ENTREGA, S.FECHA_FINALIZACION, S.SEGUIMIENTO, RUTA_SOPORTES, S.Categoria, S.ID_REGISTRO, R.Nombres, R.Apellidos,P.DESCRIPCION as Area, S.ID_PERFIL ";
                query += "from seguimientos S left join registro R on R.ID_REGISTRO = S.ID_REGISTRO inner join perfil P on P.ID_PERFIL = S.ID_PERFIL ";
                query += "where S.EPS LIKE '%" + EPS + "%' and S.TIPO_REQUERIMIENTO LIKE '%" + TIPO_REQUERIMIENTO + "%' and S.ESTADO LIKE '%" + ESTADO + "%' and S.ID_REGISTRO LIKE '%" + ID_REGISTRO + "%' order by FECHA_REQUERIMIENTO desc limit ?,? ";
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
    static cargarSeguimientoPorPerfil(EPS, TIPO_REQUERIMIENTO, ESTADO, ID_REGISTRO, page, row, ID_PERFIL) {
        return new Promise(function (resolev, reject) {
            try {
                var query = "SELECT S.ID_SEGUIMIENTOS, S.EPS, S.FECHA_REQUERIMIENTO, S.MEDIO, S.TIPO_REQUERIMIENTO, S.TITULO_REQUERIMIENTO, S.DESCRIPCION_REQUERIMIENTO, S.AREA_VALIDACION, ";
                query += "S.ESTADO, S.FECHA_ENTREGA, S.FECHA_FINALIZACION, S.SEGUIMIENTO, RUTA_SOPORTES, S.Categoria, S.ID_REGISTRO, R.Nombres, R.Apellidos, S.ID_PERFIL ";
                query += "from seguimientos S left join registro R on R.ID_REGISTRO = S.ID_REGISTRO ";
                query += "where S.ID_PERFIL = ? and S.EPS LIKE '%" + EPS + "%' and S.TIPO_REQUERIMIENTO LIKE '%" + TIPO_REQUERIMIENTO + "%' and S.ESTADO LIKE '%" + ESTADO + "%' and S.ID_REGISTRO LIKE '%" + ID_REGISTRO + "%' order by FECHA_REQUERIMIENTO desc limit ?,? ";
                database_1.default.query(query, [ID_PERFIL, page, row], function (err, result, fields) {
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
}
exports.default = Seguimientos;
