import pool from '../database';
import { helpers } from '../lib/helpers';
import bcrypt from 'bcrypt'

class Registro {

    public static registrar(newDatos) {
        return new Promise(function (resolev, reject) {
            try {
                pool.query('insert into registro set ?', newDatos, function (err, result, fields) {
                    if (err) throw err;
                    resolev(result)
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }

    public static crearUsuario(usuario) {
        let newUsuario = usuario
        return new Promise(function (resolev, reject) {
            try {
                newUsuario.Contrasena = helpers.encriptPassword(newUsuario.Contrasena)
                pool.query('insert into usuario set ?', usuario, function (err, result, fields) {
                    if (err) throw err;
                    resolev(result)
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }


    public static resetearContraseña(newDatos){
        let {USUARIO,Correo} = newDatos
        let Contrasena
        return new Promise(function (resolev, reject) {
            try {
                pool.query('select U.Contrasena, U.USUARIO, R.Correo from registro R,usuario U where R.ID_REGISTRO = U.ID_REGISTRO and R.Correo = ? and U.USUARIO = ?', [Correo, USUARIO], async function (err, result2, fields) {
                    if (err) throw err;
                    if(result2.length > 0){
                        console.log('entro')
                        Contrasena = helpers.encriptPassword('pr1234')
                        pool.query('update usuario set Contrasena = ? where USUARIO = ?', [Contrasena, USUARIO], function (err, result, fields) {
                            if (err) throw err;
                            resolev(result2)
                        });
                    }else{
                        let error ="Usuario o correo invalidos"
                        resolev(error)
                    }
                   // resolev(result)
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }

    // public static cambiarContrasena(newDatos,Usuario,Contrasena){
        
       
    //     return new Promise(function(resolev,reject){
    //         try {
    //             newDatos = helpers.encriptPassword(newDatos)  
    //           const prueba =   pool.query("update usuario set Contrasena = ? where USUARIO = ? and Contrasena = ?",[newDatos,Usuario,Contrasena], function(err, result, fields){
    //             console.log('prueba ---------------------------------')
    //             console.log(prueba)
    //                 if (err) throw err;
    //                     resolev(result) 
    //             });
    //         } catch (error) {
                
    //         }
    //     })
    // }


    public static datosUsuario(Usuario) {
        return new Promise(function (resolev, reject) {
            try {
                var query = "select R.Nombres, R.Apellidos, P.DESCRIPCION "
                query += "from registro R, usuario U, perfil P "
                query += "where R.ID_REGISTRO = U.ID_REGISTRO and P.ID_PERFIL = U.ID_PERFIL and U.USUARIO = ? "
                pool.query(query, [Usuario], function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }


    public static cargarRegistro() {
        return new Promise(function (resolev, reject) {
            try {
                var query = "select R.ID_REGISTRO, R.Nombres, R.Apellidos, R.Correo, R.Telefono, P.DESCRIPCION "
                query += "from registro R, usuario U, perfil P "
                query += "where R.ID_REGISTRO = U.ID_REGISTRO AND P.ID_PERFIL = U.ID_PERFIL"
                pool.query(query, function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }

    public static cargarResponsableSeguimiento(ID_PERFIL) {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select R.ID_REGISTRO, R.Nombres, R.Apellidos from registro R, usuario U, perfil P where U.ID_REGISTRO = R.ID_REGISTRO and U.ID_PERFIL = P.ID_PERFIL and P.ID_PERFIL = ? ", [ID_PERFIL], function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }

   public static cargarResponsableSeguimientoGest() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select R.ID_REGISTRO, R.Nombres, R.Apellidos from registro R ", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }

    public static eliminarUsuario(ID_REGISTRO) {
        return new Promise(function (resolev, reject) {
            try {
                var query = "delete from  usuario u "
                query += "where u.ID_REGISTRO = ? ;"
                pool.query(query, [ID_REGISTRO], function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }

    public static eliminarRegistro(ID_REGISTRO) {
        return new Promise(function (resolev, reject) {
            try {
                var query = "delete from  registro r "
                query += "where r.ID_REGISTRO = ? ;"
                pool.query(query, [ID_REGISTRO], function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }

    public static cargarcorreoDestinatario(usuario) {
        return new Promise(function (resolev, reject) {
            try {
                var query = "select R.ID_REGISTRO, R.Nombres, R.Apellidos, R.Correo, R.Telefono, P.DESCRIPCION "
                query += "from registro R, usuario U, perfil P "
                query += "where R.ID_REGISTRO = U.ID_REGISTRO AND R.ID_REGISTRO = ?"
                pool.query(query, [usuario], function (err, result, fields) {
                    if (err) throw err;
                    resolev(result[0].Correo);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }

    public static cargarDatosResponsable(usuario) {
        return new Promise(function (resolev, reject) {
            try {
                var query = "select R.ID_REGISTRO, R.Nombres, R.Apellidos, R.Correo, R.Telefono, P.DESCRIPCION "
                query += "from registro R, usuario U, perfil P "
                query += "where R.ID_REGISTRO = U.ID_REGISTRO AND U.USUARIO = ?"
                pool.query(query, [usuario], function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }

    public static cargarPerfil(ID_REGISTRO) {
        return new Promise(function (resolev, reject) {
            try {
                var query = "select R.ID_REGISTRO, U.ID_PERFIL "
                query += "from registro R, usuario U "
                query += "where R.ID_REGISTRO = U.ID_REGISTRO AND U.ID_REGISTRO = ?"
                pool.query(query, [ID_REGISTRO], function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }

    public static actualizarRegistro(dato,ID_REGISTRO){
        return new Promise(function(resolev,reject){
            try {
                pool.query("update registro set ? where registro.ID_REGISTRO = ?",[dato,ID_REGISTRO], function(err, result, fields){
                    if (err) throw err;
                    resolev(result) 
                });
            } catch (error) {
                
            }
        })
    }

    

}

export default Registro;