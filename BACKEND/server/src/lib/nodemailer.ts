const nodemailer = require("nodemailer");

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465, // puerto de gmail
    secure: true, // seguridad
    auth: {
      user: 'ydmosquera17@misena.edu.co', // correo
      pass: 'kelibegeptkxkeqd', // contraseña
    },
  });

  transporter.verify().then( () =>{
      console.log('Configuracion para correos exitosa')
  })