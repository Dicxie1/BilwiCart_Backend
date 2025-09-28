import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, Check } from "typeorm";
import { Costumer }  from "./costumerModel";
import { Product } from "./productModel";
@Entity('reviews')
@Check('"rating">= 0 AND "rating" <= 5')
export class Review  {
    
    @PrimaryGeneratedColumn()
    id!: number;
    
    @Column({type: 'text'})
    comment!: string;
    
    @Column({type: 'decimal', precision: 3, scale: 2, default: 0})
    rating!: number;
    
    @ManyToOne(()=> Product, (product)=> product.idProduct)
    productId!: number;
    
    @ManyToOne(() => Costumer, (costumer) => costumer.reviews, {eager: true})
    costumer!: number;
}