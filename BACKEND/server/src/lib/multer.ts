import multer from 'multer'
import { v4 as uuidv4 } from 'uuid';
import paht from 'path'

const storage = multer.diskStorage({
    destination: 'soportes',
    filename: (red, file, cb) => {
        cb(null, uuidv4() + paht.extname(file.originalname));
    }
})

export default multer({storage});