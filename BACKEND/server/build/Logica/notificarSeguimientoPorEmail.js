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
const nodemailer_1 = require("../lib/nodemailer");
const registro_1 = __importDefault(require("../dao/registro"));
class notificarSeguimientoPorEmail {
    static notificarSeguimiento(destinatario) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('destinatario -----------------------------------------------');
            var EmailDestinatario = yield registro_1.default.cargarcorreoDestinatario(destinatario.ID_REGISTRO);
            var creadorSeguimiento = yield registro_1.default.cargarDatosResponsable(destinatario.USUARIO_CREACION);
            console.log(EmailDestinatario);
            let html = '<h1>Nuevo Caso!</h1><br>';
            html += 'se le ha asignado un nuevo caso en el aplicativo de seguimientos, ';
            html += 'esperamos pueda darle gestion lo mas pronto posible.';
            yield nodemailer_1.transporter.sendMail({
                from: '"Administracion Procex" <ydmosquera17@misena.edu.co>',
                to: EmailDestinatario,
                subject: "Gestion de casos ✔",
                html: html //cuerpo del email
            });
        });
    }
}
exports.default = notificarSeguimientoPorEmail;
