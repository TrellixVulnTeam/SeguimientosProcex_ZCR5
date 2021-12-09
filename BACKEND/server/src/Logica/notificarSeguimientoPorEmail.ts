import { transporter } from '../lib/nodemailer'
class notificarSeguimientoPorEmail {

    public static async notificarSeguimiento(destinatario) {
        for (let i = 0; i < destinatario.length; i++) {
            const element = destinatario[i].Correo;
            if (element == '') {

            } else {
              let html = '<h1>Reset Contraseña!</h1><br>';
              html += 'Se ha reseteado su contraseña exitosamente.';
              html += '<br>';
              html += '<br>';
              html += 'Contraseña: pr1234 <br> <br>';
              html += 'Por su seguridad proceda a cambiarla lo mas pronto posible.';
              await transporter.sendMail({
                from: '"Administracion Procex" <seguimientosprocex@gmail.com>', // sender address
                to: element, // correo de quien recibe
                subject: "Reset Contraseña ✔", // Asunto
                html: html //cuerpo del email
              });
            }
        }
    }


}

export default notificarSeguimientoPorEmail;