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
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = require("../lib/nodemailer");
class notificarSeguimientoPorEmail {
    static notificarSeguimiento(destinatario) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < destinatario.length; i++) {
                const element = destinatario[i].Correo;
                if (element == '') {
                }
                else {
                    let html = '<h1>Reset Contraseña!</h1><br>';
                    html += 'Se ha reseteado su contraseña exitosamente.';
                    html += '<br>';
                    html += '<br>';
                    html += 'Contraseña: pr1234 <br> <br>';
                    html += 'Por su seguridad proceda a cambiarla lo mas pronto posible.';
                    yield nodemailer_1.transporter.sendMail({
                        from: '"Administracion Procex" <seguimientosprocex@gmail.com>',
                        to: element,
                        subject: "Reset Contraseña ✔",
                        html: html //cuerpo del email
                    });
                }
            }
        });
    }
}
exports.default = notificarSeguimientoPorEmail;
