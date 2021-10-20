"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tokenvalidation = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Tokenvalidation = (req, res, next) => {
    let JWT_Secret = 'procex';
    try {
        const token = req.header('authorization');
        const validationToken = token.replace('Bearer ', '');
        if (!validationToken)
            return res.status(401).send("Access denied.");
        const decoded = jsonwebtoken_1.default.verify(validationToken, JWT_Secret);
        next();
    }
    catch (error) {
        res.status(401).send("Invalid token");
    }
};
exports.Tokenvalidation = Tokenvalidation;
