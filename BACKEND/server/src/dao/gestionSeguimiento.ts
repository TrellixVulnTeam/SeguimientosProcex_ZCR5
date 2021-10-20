import pool from '../database';

class GestionSeguimiento {
    public static cargarGestion(ID_SEGUIMIENTOS) {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from gestion_seguimiento where ID_SEGUIMIENTOS = ? ", ID_SEGUIMIENTOS, function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }

    public static guardarGestion(newDatos) {
        return new Promise(function (resolev, reject) {
            try {
                pool.query('insert into gestion_seguimiento set ?', newDatos, function (err, result, fields) {
                    if (err) throw err;
                    resolev(result['insertId']);
                })
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }

    public static actualizarGestion(newDatos, ID_GESTION_SEGUIMIENTO) {
        return new Promise(function (resolev, reject) {
            try {
                pool.query('UPDATE gestion_seguimiento set ? where gestion_seguimiento.ID_GESTION_SEGUIMIENTO = ? ', [newDatos, ID_GESTION_SEGUIMIENTO], function (err, result, fields) {
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

export default GestionSeguimiento;