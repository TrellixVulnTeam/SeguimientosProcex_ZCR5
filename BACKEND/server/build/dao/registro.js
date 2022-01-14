"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
const helpers_1 = require("../lib/helpers");
const bcrypt_1 = __importDefault(require("bcrypt"));
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
    static resetearContraseña(newDatos) {
        let { USUARIO, Correo } = newDatos;
        let Contrasena;
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query('select U.Contrasena, U.USUARIO, R.Correo from registro R,usuario U where R.ID_REGISTRO = U.ID_REGISTRO and R.Correo = ? and U.USUARIO = ?', [Correo, USUARIO], function (err, result2, fields) {
                    return __awaiter(this, void 0, void 0, function* () {
                        if (err)
                            throw err;
                        if (result2.length > 0) {
                            console.log('entro');
                            Contrasena = helpers_1.helpers.encriptPassword('pr1234');
                            database_1.default.query('update usuario set Contrasena = ? where USUARIO = ?', [Contrasena, USUARIO], function (err, result, fields) {
                                if (err)
                                    throw err;
                                resolev(result2);
                            });
                        }
                        else {
                            let error = "Usuario o correo invalidos";
                            resolev(error);
                        }
                        // resolev(result)
                    });
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            }
            ;
        });
    }
    static cambiarContrasena(newDatos, USUARIO, Contrasena) {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("SELECT * FROM usuario WHERE USUARIO = ?", [USUARIO], function (err, result, fields) {
                    return __awaiter(this, void 0, void 0, function* () {
                        if (err)
                            throw err;
                        if (result.length > 0) {
                            let match = yield bcrypt_1.default.compare(Contrasena, result[0].Contrasena);
                            if (match) {
                                result = result[0];
                                newDatos = helpers_1.helpers.encriptPassword(newDatos);
                                console.log(result);
                                console.log('entrando');
                                console.log('entrando a cambiar contraseña');
                                database_1.default.query("update usuario set Contrasena = ? where USUARIO = ? ", [newDatos, USUARIO], function (err, result, fields) {
                                    if (err)
                                        throw err;
                                    resolev(result);
                                });
                                // resolev(result)
                            }
                            else {
                                let error = "Contraseña no valida";
                                resolev(error);
                            }
                        }
                        else {
                            let error = "Usuario no valido";
                            resolev(error);
                        }
                    });
                });
            }
            catch (error) {
            }
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
    static cargarResponsableSeguimiento(ID_PERFIL) {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select R.ID_REGISTRO, R.Nombres, R.Apellidos from registro R, usuario U, perfil P where U.ID_REGISTRO = R.ID_REGISTRO and U.ID_PERFIL = P.ID_PERFIL and P.ID_PERFIL = ? ", [ID_PERFIL], function (err, result, fields) {
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
    static cargarResponsableSeguimientoGest() {
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
    static cargarPerfil(ID_REGISTRO) {
        return new Promise(function (resolev, reject) {
            try {
                var query = "select R.ID_REGISTRO, U.ID_PERFIL ";
                query += "from registro R, usuario U ";
                query += "where R.ID_REGISTRO = U.ID_REGISTRO AND U.ID_REGISTRO = ?";
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
    static actualizarRegistro(dato, ID_REGISTRO) {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("update registro set ? where registro.ID_REGISTRO = ?", [dato, ID_REGISTRO], function (err, result, fields) {
                    if (err)
                        throw err;
                    resolev(result);
                });
            }
            catch (error) {
            }
        });
    }
}
exports.default = Registro;
