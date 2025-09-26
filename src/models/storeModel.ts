import { Entity, Column, PrimaryGeneratedColumn, OneToMany,OneToOne, JoinColumn } from "typeorm";
import { Product } from "./productModel";
import { User } from "./userModel";
@Entity()
export class Store{
    @PrimaryGeneratedColumn()
    idStore!: number;

    @Column({type: 'varchar', length: 100})
    name!: string;

    @Column({type: 'text'})
    description!: string;

    @Column({type: 'varchar', length: 255})
    address!: string;

    @Column({type: 'varchar', length: 15})
    phone!: string;

    @Column({type: 'varchar', length: 100})
    email!: string;
    
    @Column({type: 'varchar', length: 100})
    manager!: string;

    @Column({type: 'boolean', default: true})
    isActive!: boolean;

    @OneToMany(()=> Product, (product)=> product.storeId)
    product!: Product[];

     @OneToOne(()=> User)
    @JoinColumn()
    user!: User;
}