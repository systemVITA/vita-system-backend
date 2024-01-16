import { hashSync, genSaltSync } from 'bcrypt';
import { prisma } from '../database';
import { IUserCreate } from '../interfaces/IUserCreate';
import { User } from '@prisma/client';

class UserRepository implements IUserCreate {

    public async create(name: string, email: string, password: string): Promise<User> {

        const userExists = await prisma.user.findFirst({
            where: { email },
        });

        if (userExists) {
            throw new Error('Erro: usuário já existe');
        }

        const salt = genSaltSync(10);
        const hashedPassword = hashSync(password, salt);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });

        return user;
    } 
}

export { UserRepository };
