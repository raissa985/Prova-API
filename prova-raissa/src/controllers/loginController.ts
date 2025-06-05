import { generateToken } from "../middelwares/generateTokenMiddleware";
import { hashPassword } from "../utils/bcrypts"; 
import { comparePassword } from "../utils/comparePassword";
import { getUser } from '../models/loginModel'


export const loginController = async (req, res) => {
const { nome, senha } = req.body;
const user = await getUser(nome);

    if(!user) throw new Error("Usuario não encontrado")
    const isMatch = await comparePassword(senha, user.senha)
    if(!isMatch) return res.status(401).json({message:"Senha invalida"})
    const token =   generateToken(user.id, user.papel)
    return res.json({token})
}