import userModel from "../models/userModel";


const getAll = async (_req, res) => {
    const users = await userModel.getAll()
    return res.status(200).json(users)
}
const getById = async (req, res) => {
    const { id } = req.params
    const users = await userModel.getById(id)
    return res.status(200).json(users)
}
const createUser = async (req, res) => {

    try {
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({ message: "Dados invalidos para criação" })
        }
        const result = await userModel.createUser(req.body)
        return res.status(201).json(result)

    } catch (error) {

        res.status(500).json({ message: "Erro interno ao criar usuario" })

    }

}
const editUser = async (req, res) => {
    const { id } = req.params
    try {
        if (!id) {
            return res.status(400).json({ message: "O id é necessario" })
        }
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({ message: "Dados invalidos para edição" })
        }
        const edit_users = await userModel.editUser(id, req.body)
        return res.status(200).json(edit_users)
    } catch (error) {
        return res.status(500).json({ message: "Erro interno" })
    }


}
const removeUser = async (req, res) => {
    const { id } = req.params
    const users = await userModel.removeUser(id)
    return res.status(200).json()
}

export default {
    getAll,
    getById,
    createUser,
    editUser,
    removeUser

}
