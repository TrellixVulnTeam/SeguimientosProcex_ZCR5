import {Router} from 'express';
import {soportesControllers} from '../Controllers/SoportesControllers';
import multer from '../lib/multer'
import { Tokenvalidation } from '../lib/validateToken';

class SoportesRoutes{
    public   router:Router = Router()

    constructor(){
        this.config();
      }
      
      config():void{
        this.router.use(Tokenvalidation)
        this.router.post('/',multer.single('soporte'),soportesControllers.GuardarSoporte) 
        this.router.post('/soporte',soportesControllers.Cargarsoporte)
        // this.router.get('/:Documento_hemofilia',soportesControllers.getNumeroRegistro)
    }

}

const soportesRoutes =  new SoportesRoutes()
export default soportesRoutes.router