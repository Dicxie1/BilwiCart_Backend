import {  Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, Entity } from "typeorm";
import { Costumer } from "./costumerModel";
import { Vendor } from "./vendorModel";
export enum UserSexEnum {
    MALE = 'M',
    FEMALE = 'F'
}

export enum UserRoleEnum {
    ADMIN = 'admin',
    VENDOR = 'vendor',
    USER = 'user'
}
@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({type: 'varchar', length: 100, unique: true})
    username!: string;
    
    @Column({type: 'varchar',length: 100, nullable: true})
    name!: string;
    
    @Column({type: 'varchar', length: 100, unique: true})
    email!: string
    
    @Column({type: 'varchar', length: 120, select: false})
    password!: string;
    
    @Column({type: 'enum', enum: UserRoleEnum, nullable: true})
    rol!: string
    
    @CreateDateColumn({name: 'create_at'})
    createAt!: Date;

    @UpdateDateColumn({name: 'update_at'})
    updateAt!: Date;


    @OneToOne(()=> Vendor, (vendor)=> vendor.user)
    vendor!: Vendor;
}