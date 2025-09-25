import { User } from "../models/userModel";
import { AppDataSource } from "../config/db";
import *  as bcrypt from 'bcrypt';
import { sign, SignOptions } from 'jsonwebtoken';
import { env } from "../config/env";
export class AuthService{
    private static userRepository = AppDataSource.getRepository(User);
    /**
     *
     */
    static async register(userData: Omit<User, 'id' | 'create_at' | 'update_at' | 'sexo'>) : Promise<Omit<User, 'password' | 'sexo'>>{
        const existingUser = await this.userRepository.findOneBy({email: userData.email});
        if(existingUser) throw new Error('El email ya esta en uso');
        const userNameExists = await this.userRepository.findOneBy({username: userData.username});
        if(userNameExists) throw new Error('El nombre de usuario ya esta en uso');
        const hashedPassword = await bcrypt.hash(userData.password, env.PASSWORD_SALT_ROUNDS);
        const user = this.userRepository.create({...userData, password: hashedPassword});
        const saveUser = await this.userRepository.save(user);
        const {password , ...userWithoutPassword} = saveUser;
        return userWithoutPassword;
    }
    static async login(email: string, passwd: string): Promise<{user: Omit<User, 'password'>; token: string}>{
        const user = await this.userRepository.findOne({
            where: {email},
            select: ['id', 'username', 'password', 'createAt', 'updateAt']
        });
        if(!user) throw new Error('Usuario no Existe');
        const isValidPassword = await bcrypt.compare(passwd, user.password)
        if(!isValidPassword) throw new Error('Credencial invalida');

        const payload = { userId: user.id };
        const secret = env.JWT_SECRET;
        const options: SignOptions = {
            expiresIn: env.JWT_EXPIRES_IN as any
        };

        const token = sign(payload, secret, options);

        const {password: _, ...userWithoutPassword} = user;
        return {user: userWithoutPassword, token};
    }
}