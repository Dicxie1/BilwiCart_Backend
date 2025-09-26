/**
 * @fileoverview Modelo esquema de la tabla usuarios
 * @use
 * import {User} from './src/model/user'; 
 */
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm"
import { Review } from "./reviewModel";
import { Order } from "./orderModel";

export enum UserSexEnum {
    MALE = 'M',
    FEMALE = 'F'
}
/*
export enum UserRoleEnum {
    ADMIN = 'admin',
    VENDOR = 'vendor',
    USER = 'user'
}
*/ 
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

    /*
     * @Column({type: enum, enum: UserRoleEnum, default: UserRoleEnum.USER})
     * role!: string;
    */

    @CreateDateColumn({name: 'create_at'})
    createAt!: Date;

    @UpdateDateColumn({name: 'update_at'})
    updateAt!: Date;

    @OneToMany(() => Review, (review) => review.user)
    reviews!: Review[]

    @OneToMany(()=> Order, (order)=> order.user)
    orders!: Order[];
}
