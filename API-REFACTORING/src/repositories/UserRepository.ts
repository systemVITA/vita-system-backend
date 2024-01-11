import { hashSync } from 'bcrypt';
import { prisma } from '../database';
import { IUserCreate } from '../interfaces/IUserCreate';

class UserRepository implements IUserCreate {
    public async create(name: string, email: string, password: string): Promise<{ id: number; name: string; email: string; password: string; }> {
        try {

            const userExists = await prisma.user.findFirst({
                where: { email },
            });

            if (userExists) {
                throw new Error('Erro: usuário já existe');
            }

            const saltRounds = 10; 
            const HashPassword = hashSync(password, saltRounds);

            const user = await prisma.user.create({
                data: {
                    name,
                    email,
                    password: HashPassword,
                },
            });

            return user;
        } catch (error) {
            throw new Error(`Erro ao criar usuário: ${error.message}`);
        }
    }
}

export { UserRepository };
