import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
config();

export const verifyTokenMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const secretKey = process.env.SECRET_KEY;

    if (!secretKey) {
        throw new Error("SECRET_KEY não definida nas variáveis de ambiente");
    }

    if (!authHeader) {
        return res.status(401).json({ message: "Acesso negado. Token não fornecido." });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).json({ message: "Token inválido ou expirado." });
    }
};
