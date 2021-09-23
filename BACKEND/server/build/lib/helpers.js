"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helpers = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
class Helpers {
    encriptPassword(password) {
        const salt = bcrypt_1.default.genSaltSync(11);
        const hash = bcrypt_1.default.hashSync(password, salt);
        return hash;
    }
}
exports.helpers = new Helpers();
