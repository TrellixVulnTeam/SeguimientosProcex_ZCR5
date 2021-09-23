import pool from '../database';

class Seguimientos {

    public static cargarTodos(EPS,TIPO_REQUERIMIENTO, ESTADO, ID_REGISTRO, page, row) {
        return new Promise(function (resolev, reject) {
            try {
                var query = "SELECT S.ID_SEGUIMIENTOS, S.EPS, S.FECHA_REQUERIMIENTO, S.MEDIO, S.TIPO_REQUERIMIENTO, S.TITULO_REQUERIMIENTO, S.DESCRIPCION_REQUERIMIENTO, S.AREA_VALIDACION, ";
                query += "S.ESTADO, S.FECHA_ENTREGA, S.FECHA_FINALIZACION, S.SEGUIMIENTO, RUTA_SOPORTES, S.Categoria, S.ID_REGISTRO, R.Nombres, R.Apellidos ";
                query += "from seguimientos S, registro R ";
                query += "where R.ID_REGISTRO = S.ID_REGISTRO and  S.EPS LIKE '%" + EPS + "%' and S.TIPO_REQUERIMIENTO LIKE '%" + TIPO_REQUERIMIENTO + "%' and S.ESTADO LIKE '%" + ESTADO + "%' and S.ID_REGISTRO LIKE '%" + ID_REGISTRO + "%' limit ?,? ";
                 pool.query(query, [page, row], function (err, result, fields) {
                    if (err) throw err;
                    resolev(result)
                });
            }
            catch (error) {
                // res.status(404).json({ error: 'No se obtuvieron datos' });
            };
        });
    }

   public static cargarSeguimientoPorPerfil(EPS,TIPO_REQUERIMIENTO, ESTADO,ID_REGISTRO, page, row, ID_PERFIL){
        return new Promise(function (resolev, reject) {
            try {
                var query = "SELECT S.ID_SEGUIMIENTOS, S.EPS, S.FECHA_REQUERIMIENTO, S.MEDIO, S.TIPO_REQUERIMIENTO, S.TITULO_REQUERIMIENTO, S.DESCRIPCION_REQUERIMIENTO, S.AREA_VALIDACION, ";
                query += "S.ESTADO, S.FECHA_ENTREGA, S.FECHA_FINALIZACION, S.SEGUIMIENTO, RUTA_SOPORTES, S.Categoria, S.ID_REGISTRO, R.Nombres, R.Apellidos, U.ID_PERFIL ";
                query += "from seguimientos S, registro R,  usuario U, perfil P ";
                query += "where R.ID_REGISTRO = S.ID_REGISTRO and R.ID_REGISTRO = U.ID_REGISTRO and P.ID_PERFIL = U.ID_PERFIL and P.ID_PERFIL = ? and S.EPS LIKE '%" + EPS + "%' and S.TIPO_REQUERIMIENTO LIKE '%" + TIPO_REQUERIMIENTO + "%' and S.ESTADO LIKE '%" + ESTADO + "%' and S.ID_REGISTRO LIKE '%" + ID_REGISTRO + "%' limit ?,? ";
                pool.query(query, [ID_PERFIL, page, row], function (err, result, fields) {
                    if (err) throw err;
                    resolev(result)
                });
            }
            catch (error) {
                // res.status(404).json({ error: 'No se obtuvieron datos' });
            };
        });
    }

    public static getNumeroRegistro() {
        return new Promise(function (resolev, reject) {
            try {
                const Clientes = pool.query("select count(0) as numero_registro from seguimientos", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result)
                });
            }
            catch (error) {
                // res.status(404).json({ error: 'No se obtuvieron Datos' });
            };
        });
    }

    public static guardarDatos(newDatos) {
        return new Promise(function (resolev, reject) {
            try {
                pool.query('insert into SEGUIMIENTOS set ?', newDatos, function (err, result, fields) {
                    if (err) throw err;
                    resolev(result)
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }

    public static actualizarSeguimiento(newDatos, ID_SEGUIMIENTOS) {
        return new Promise(function (resolev, reject) {
            try {
                pool.query('UPDATE seguimientos set ? where seguimientos.ID_SEGUIMIENTOS = ? ', [newDatos, ID_SEGUIMIENTOS], function (err, result, fields) {
                    if (err) throw err;
                    resolev(result)
                });
            }
            catch (error) {
                // res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
}
export default Seguimientos;