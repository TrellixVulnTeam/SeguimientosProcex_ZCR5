"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transporter = void 0;
const nodemailer = require("nodemailer");
exports.transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: 'ydmosquera17@misena.edu.co',
        pass: 'kelibegeptkxkeqd', // contraseña
    },
});
exports.transporter.verify().then(() => {
    console.log('Configuracion para correos exitosa');
});
