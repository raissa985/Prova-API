import { connectionModel } from "./connectionModel"; 

export const getUser =  async (nome: string) => {
    try {
        const query = `SELECT * FROM teste WHERE nome = ?`;
        const [rows]: any = await connectionModel.execute(query, [nome]);

        if (Array.isArray(rows) && rows.length > 0) {
            return rows[0]; // Retorna o primeiro usuário encontrado
        }

        return null; // Usuário não encontrado
    } catch (error) {
        throw new Error("Falha ao buscar usuario");
    }
}
