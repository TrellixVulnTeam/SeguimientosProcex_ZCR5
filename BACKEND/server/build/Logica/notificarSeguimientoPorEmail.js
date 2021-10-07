"use strict";
// import { transporter } from '../lib/nodemailer'
// import registro from '../dao/registro';
// class notificarSeguimientoPorEmail {
//   public static async notificarSeguimiento(destinatario) {
//     if (destinatario.ID_REGISTRO == '') {
//     } else {
//       var EmailDestinatario = await registro.cargarcorreoDestinatario(destinatario.ID_REGISTRO);
//       var creadorSeguimiento = await registro.cargarDatosResponsable(destinatario.USUARIO_CREACION);
//       console.log(EmailDestinatario)
//       let html = '<h1>Nuevo Caso!</h1><br>';
//       html += 'se le ha asignado un nuevo caso en el aplicativo de seguimientos, ';
//       html += 'esperamos pueda darle gestion lo mas pronto posible.';
//       await transporter.sendMail({
//         from: '"Administracion Procex" <ydmosquera17@misena.edu.co>', // sender address
//         to: EmailDestinatario, // correo de quien recibe
//         subject: "Gestion de casos ✔", // Asunto
//         html: html //cuerpo del email
//       });
//     }
//   }
// }
// export default notificarSeguimientoPorEmail;
