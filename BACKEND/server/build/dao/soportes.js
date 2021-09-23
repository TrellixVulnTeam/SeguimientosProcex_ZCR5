"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class soportes {
    static GuardarSoporte(newsoporte, req) {
        return new Promise(function (resolev, reject) {
            try {
                const { nombre_archivo, tipo_archivo, usuario_creacion, ID_GESTION_SEGUIMIENTO } = newsoporte;
                const newSoporte = {
                    nombre_archivo: nombre_archivo,
                    tipo_archivo: tipo_archivo,
                    usuario_creacion: usuario_creacion,
                    ID_GESTION_SEGUIMIENTO: ID_GESTION_SEGUIMIENTO,
                    RUTA_SOPORTES: req.file.path
                };
                database_1.default.query("insert into soportes set ?", newSoporte, function (err, result, fielts) {
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
    static Cargarsoporte(nombreArchivo, tipoArchivo, ID_GESTION_SEGUIMIENTO, page, row) {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from soportes where ID_GESTION_SEGUIMIENTO = ?  and  nombre_archivo LIKE '%" + nombreArchivo + "%' and tipo_archivo LIKE '%" + tipoArchivo + "%'  order by fecha_creacion desc limit ?,? ", [ID_GESTION_SEGUIMIENTO, page, row], function (err, result, fielts) {
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
exports.default = soportes;
