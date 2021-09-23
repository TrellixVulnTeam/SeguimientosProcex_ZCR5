"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
const helpers_1 = require("../lib/helpers");
class Registro {
    static registrar(newDatos) {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query('insert into registro set ?', newDatos, function (err, result, fields) {
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
    static crearUsuario(usuario) {
        let newUsuario = usuario;
        return new Promise(function (resolev, reject) {
            try {
                newUsuario.Contrasena = helpers_1.helpers.encriptPassword(newUsuario.Contrasena);
                database_1.default.query('insert into usuario set ?', usuario, function (err, result, fields) {
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
    static datosUsuario(Usuario) {
        return new Promise(function (resolev, reject) {
            try {
                var query = "select R.Nombres, R.Apellidos, P.DESCRIPCION ";
                query += "from registro R, usuario U, perfil P ";
                query += "where R.ID_REGISTRO = U.ID_REGISTRO and P.ID_PERFIL = U.ID_PERFIL and U.USUARIO = ? ";
                database_1.default.query(query, [Usuario], function (err, result, fields) {
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
    static cargarRegistro() {
        return new Promise(function (resolev, reject) {
            try {
                var query = "select R.ID_REGISTRO, R.Nombres, R.Apellidos, R.Correo, R.Telefono, P.DESCRIPCION ";
                query += "from registro R, usuario U, perfil P ";
                query += "where R.ID_REGISTRO = U.ID_REGISTRO AND P.ID_PERFIL = U.ID_PERFIL";
                database_1.default.query(query, function (err, result, fields) {
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
    static cargarResponsableSeguimiento() {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select R.ID_REGISTRO, R.Nombres, R.Apellidos from registro R ", function (err, result, fields) {
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
    static eliminarUsuario(ID_REGISTRO) {
        return new Promise(function (resolev, reject) {
            try {
                var query = "delete from  usuario u ";
                query += "where u.ID_REGISTRO = ? ;";
                database_1.default.query(query, [ID_REGISTRO], function (err, result, fields) {
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
    static eliminarRegistro(ID_REGISTRO) {
        return new Promise(function (resolev, reject) {
            try {
                var query = "delete from  registro r ";
                query += "where r.ID_REGISTRO = ? ;";
                database_1.default.query(query, [ID_REGISTRO], function (err, result, fields) {
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
    static cargarcorreoDestinatario(usuario) {
        return new Promise(function (resolev, reject) {
            try {
                var query = "select R.ID_REGISTRO, R.Nombres, R.Apellidos, R.Correo, R.Telefono, P.DESCRIPCION ";
                query += "from registro R, usuario U, perfil P ";
                query += "where R.ID_REGISTRO = U.ID_REGISTRO AND R.ID_REGISTRO = ?";
                database_1.default.query(query, [usuario], function (err, result, fields) {
                    if (err)
                        throw err;
                    resolev(result[0].Correo);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            }
            ;
        });
    }
    static cargarDatosResponsable(usuario) {
        return new Promise(function (resolev, reject) {
            try {
                var query = "select R.ID_REGISTRO, R.Nombres, R.Apellidos, R.Correo, R.Telefono, P.DESCRIPCION ";
                query += "from registro R, usuario U, perfil P ";
                query += "where R.ID_REGISTRO = U.ID_REGISTRO AND U.USUARIO = ?";
                database_1.default.query(query, [usuario], function (err, result, fields) {
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
exports.default = Registro;
