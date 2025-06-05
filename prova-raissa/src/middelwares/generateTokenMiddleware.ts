import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
config();

export const generateToken = (userId: string, papel: string): string => {
    const secretKey = process.env.SECRET_KEY;

    if (!secretKey) {
        throw new Error("SECRET_KEY não está definida nas variáveis de ambiente.");
    }

    try {
        const token = jwt.sign(
            { id: userId, papel },
            secretKey,
            { expiresIn: '1h' }
        );
        console.log(token);
        return token;
    } catch (error) {
        console.error("Erro ao gerar JWT:", error);
        throw new Error("Falha ao gerar token.");
    }
};
