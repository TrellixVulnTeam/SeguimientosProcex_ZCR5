import { Request, Response, NextFunction, json } from 'express'
import jwt from 'jsonwebtoken';
export const Tokenvalidation = (req: Request, res: Response, next: NextFunction) => {
    let JWT_Secret = 'procex';
    try {
        const token = req.header('authorization')
        const validationToken = token.replace('Bearer ', '')
        if (!validationToken) return res.status(401).send("Access denied.");

        const decoded = jwt.verify(validationToken, JWT_Secret);
        next();
    } catch (error) {
        res.status(401).send("Invalid token");
    }
}