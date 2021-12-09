import bcrypt from 'bcrypt';

class Helpers {

    encriptPassword(password:any) {
        const salt = bcrypt.genSaltSync(11);
        const hash = bcrypt.hashSync(password, salt);
        return hash;
    }

}

export const  helpers = new Helpers();