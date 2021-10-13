import { Request, Response, text, } from 'express';
import Login from '../dao/login'

class Logincontrollers {

    public async Login(req: Request, res: Response) {
        try {
            var login = await Login.Login(req.body,)
            if(login == 'Contraseña no valida' || login =='Usuario no valido'){
                res.status(404).json({ text: "Usuario y/o Contraseña incorrecto"});
            }else{
                res.json(login)
            }
           
        } catch (error) {
            res.status(404).json({ error: 'No se puedieron obtener Datos' });
        }
    }
}

export const logincontrollers = new Logincontrollers();