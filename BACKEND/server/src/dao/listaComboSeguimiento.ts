import pool from '../database';

class listaComboSeguimientos {
    public static cargarMedio() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from lista_combo_seguimientos where CODIGO_LISTA = 'seguimiento.medio'", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }

    public static cargarTipoRequerimiento() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from lista_combo_seguimientos where CODIGO_LISTA = 'seguimiento.tipoRequerimiento'", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }

    public static cargarCategoria() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from lista_combo_seguimientos where CODIGO_LISTA = 'seguimiento.categoria'", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }

    public static cargarEstado() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from lista_combo_seguimientos where CODIGO_LISTA = 'seguimiento.estado'", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }

    public static cargarPerfil() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from perfil", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }

    public static cargarPrestador() {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from lista_combo_seguimientos where CODIGO_LISTA = 'seguimiento.prestador'", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }

}

export default listaComboSeguimientos;