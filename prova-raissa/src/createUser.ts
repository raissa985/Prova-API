import { connectionModel } from './models/connectionModel';
import { hashPassword } from './utils/bcrypts';

const createUser = async () => {
  const nome = 'raissa';
  const email = 'raissa@gmail.com';
  const senha = '123456';
  const papel = 'admin';

  try {
    const senhaHash = await hashPassword(senha);

    const query = `INSERT INTO user (nome, email, senha, papel) VALUES (?, ?, ?, ?)`;
    await connectionModel.execute(query, [nome, email, senhaHash, papel]);

    console.log('Usuário criado com sucesso!');
    process.exit(); // Encerra o script
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    process.exit(1);
  }
};

createUser();
