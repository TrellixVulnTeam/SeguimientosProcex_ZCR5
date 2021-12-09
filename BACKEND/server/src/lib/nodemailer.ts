const nodemailer = require("nodemailer");

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465, // puerto de gmail
    secure: true, // seguridad
    auth: {
      user: 'seguimientosprocex@gmail.com', // correo
      pass: 'sgaijthnvzfxenhc', // contraseña
    },
  });

  //contraseña: seguimientos1234
  transporter.verify().then( () =>{
      console.log('Configuracion para correos exitosa')
  })