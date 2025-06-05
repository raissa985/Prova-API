import { connectionModel } from "./connectionModel";
import { hashPassword } from '../utils/bcrypts';

const getAll = async () => {
    const [users] = await connectionModel.execute("SELECT * FROM teste");
    return users;
};

const getById = async (id: number) => {
    const [users] = await connectionModel.execute("SELECT * FROM teste WHERE id = ?", [id]);
    return users;
};

const createUser = async (body: { nome: string, email: string, senha: string, papel: string }) => {
    const { nome, email, senha, papel } = body;
    const hashedPassword = await hashPassword(senha);
    const query = "INSERT INTO teste (nome, email, senha, papel) VALUES (?, ?, ?, ?)";
    const [result] = await connectionModel.execute(query, [nome, email, hashedPassword, papel]);
    return result;
};

const editUser = async (id: number, body: { nome?: string, email?: string, senha?: string, papel?: string }) => {
    const { nome, email, senha, papel } = body;
    let hashedPassword = senha;

    if (senha) {
        hashedPassword = await hashPassword(senha);
    }

    const query = "UPDATE teste SET nome = ?, email = ?, senha = ?, papel = ? WHERE id = ?";
    const [edit_users] = await connectionModel.execute(query, [nome, email, hashedPassword, papel, id]);
    return edit_users;
};

const removeUser = async (id: number) => {
    const [users] = await connectionModel.execute("DELETE FROM teste WHERE id = ?", [id]);
    return users;
};

export default {
    getAll,
    getById,
    createUser,
    editUser,
    removeUser
};
