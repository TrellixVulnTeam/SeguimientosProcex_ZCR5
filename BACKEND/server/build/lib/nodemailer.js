"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transporter = void 0;
const nodemailer = require("nodemailer");
exports.transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: 'seguimientosprocex@gmail.com',
        pass: 'sgaijthnvzfxenhc', // contraseña
    },
});
//contraseña: seguimientos1234
exports.transporter.verify().then(() => {
    console.log('Configuracion para correos exitosa');
});
