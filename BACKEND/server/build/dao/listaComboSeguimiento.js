"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class listaComboSeguimientos {
    static cargarMedio() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from lista_combo_seguimientos where CODIGO_LISTA = 'seguimiento.medio'", function (err, result, fields) {
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
    static cargarTipoRequerimiento() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from lista_combo_seguimientos where CODIGO_LISTA = 'seguimiento.tipoRequerimiento'", function (err, result, fields) {
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
    static cargarCategoria() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from lista_combo_seguimientos where CODIGO_LISTA = 'seguimiento.categoria'", function (err, result, fields) {
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
    static cargarEstado() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from lista_combo_seguimientos where CODIGO_LISTA = 'seguimiento.estado'", function (err, result, fields) {
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
    static cargarPerfil() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from perfil", function (err, result, fields) {
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
    static cargarPrestador() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from lista_combo_seguimientos where CODIGO_LISTA = 'seguimiento.prestador'", function (err, result, fields) {
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
}
exports.default = listaComboSeguimientos;
