import bcrypt from 'bcrypt'

 export const hashPassword = async (password: string):Promise<string> => {

    
    const salt =  await bcrypt.genSalt(10)
    console.log(password)
    return await bcrypt.hash(password, salt)
}