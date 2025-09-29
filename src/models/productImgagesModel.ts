/**
 * 
 */
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./productModel";
@Entity()
export class ProductImages {
    @PrimaryGeneratedColumn()
    idProductImage!: number;
    
    @Column({type: 'varchar', length: 255})
    url!:string
    
    @Column({type: 'boolean', default: false})
    isPrimary!:boolean
    
    @Column({type: 'date'})
    date!:Date  
    
    @ManyToOne(() => Product, (product) => product.images)
    product!: number;
}