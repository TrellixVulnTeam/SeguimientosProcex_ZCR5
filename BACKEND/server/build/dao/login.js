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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class Login {
    static Login(body) {
        let { USUARIO, Contrasena } = body;
        console.log(Contrasena);
        let JWT_Secret = 'procex';
        return new Promise(function (resolev, reject) {
            try {
                var query = "SELECT * FROM usuario WHERE USUARIO =?";
                database_1.default.query(query, [USUARIO], function (err, result, fields) {
                    return __awaiter(this, void 0, void 0, function* () {
                        if (err)
                            throw err;
                        if (result.length > 0) {
                            let match = yield bcrypt_1.default.compare(Contrasena, result[0].Contrasena);
                            if (match) {
                                result = result[0];
                                delete result.Contrasena;
                                let datos_user = {
                                    ID_USUARIO: result.ID_USUARIO,
                                    ID_REGISTRO: result.ID_REGISTRO,
                                    ID_PERFIL: result.ID_PERFIL,
                                    USUARIO: result.USUARIO
                                };
                                var token = jsonwebtoken_1.default.sign(datos_user, JWT_Secret, { expiresIn: "1h" });
                                resolev({ signedUser: datos_user, token: token });
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
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            }
            ;
        });
    }
}
exports.default = Login;
