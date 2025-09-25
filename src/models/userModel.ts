/**
 * @fileoverview Modelo esquema de la tabla usuarios
 * @use
 * import {User} from './src/model/user'; 
 */
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

export enum UserSexEnum {
    MALE = 'M',
    FEMALE = 'F'
}

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({type: 'varchar',length: 100,unique: true})
    username!: string;
    
    @Column({type: 'enum', enum: UserSexEnum, nullable: true } )
    sexo!: string;
    
    @Column({type: 'varchar', length: 100, unique: true})
    email!: string
    
    @Column({type: 'varchar', length: 120, select: false})
    password!: string;

    @CreateDateColumn({name: 'create_at'})
    createAt!: Date;

    @UpdateDateColumn({name: 'update_at'})
    updateAt!: Date;
}
