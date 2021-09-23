import pool from '../database';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'
import { helpers } from '../lib/helpers';
class Login {

    public static Login(body) {
        let { USUARIO, Contrasena } = body;
        console.log(Contrasena)
        let JWT_Secret = 'procex';
        return  new Promise(function (resolev, reject) {
            try {
                var query = "SELECT * FROM usuario WHERE USUARIO =?"
                 pool.query(query, [USUARIO],  async function (err, result, fields) {
                    if (err) throw err;
                    if (result.length > 0) {
                        let match = await bcrypt.compare(Contrasena, result[0].Contrasena);
                        if (match) {
                            result = result[0];
                            delete result.Contrasena;
                            var token = jwt.sign(JSON.stringify(result), JWT_Secret);
                            resolev({signedUser: result, token: token });
                        } else {
                            let error ="Contraseña no valida"
                            resolev(error)
                        }
                    } else {
                        let error ="Usuario no valido"
                        resolev(error)
                    }

                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });

    }

}

export default Login;