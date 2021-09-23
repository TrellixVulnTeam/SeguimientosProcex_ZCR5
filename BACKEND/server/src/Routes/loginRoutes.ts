import {Router} from 'express'
import {logincontrollers} from '../Controllers/loginControllers'

class LoginRoutes{

    public   router:Router = Router()

    constructor(){
      this.config();
    }

    config():void{
        this.router.post('/',logincontrollers.Login)
    }
    
}

const loginRoutes =  new LoginRoutes()
export default loginRoutes.router