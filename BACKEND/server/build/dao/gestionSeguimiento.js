"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class GestionSeguimiento {
    static cargarGestion(ID_SEGUIMIENTOS) {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from gestion_seguimiento where ID_SEGUIMIENTOS = ? ", ID_SEGUIMIENTOS, function (err, result, fields) {
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
    static guardarGestion(newDatos) {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query('insert into gestion_seguimiento set ?', newDatos, function (err, result, fields) {
                    if (err)
                        throw err;
                    resolev(result['insertId']);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            }
            ;
        });
    }
    static actualizarGestion(newDatos, ID_GESTION_SEGUIMIENTO) {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query('UPDATE gestion_seguimiento set ? where gestion_seguimiento.ID_GESTION_SEGUIMIENTO = ? ', [newDatos, ID_GESTION_SEGUIMIENTO], function (err, result, fields) {
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
exports.default = GestionSeguimiento;
