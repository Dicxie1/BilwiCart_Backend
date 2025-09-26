/**
 * 
 */
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { Review } from "./reviewModel";
import { Category } from "./categoryModel";
import { ProductImages } from "./productImgagesModel";
import { Store } from "./storeModel";
import { User } from "./userModel";
export enum ProductStatusEnum {
    ACTIVE = 'active',
    INACTIVE = 'inactive'
}

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn()
    idProduct!: number;

    @Column({type: 'varchar', length: 150})
    name!: string;

    @Column({type: 'text'})
    description!: string;

    @Column({type: 'decimal', precision: 10, scale: 2})
    price!: number;

    @Column({type: 'enum', enum: ProductStatusEnum, default: ProductStatusEnum.ACTIVE})
    status!: string;

    @Column({type: 'int'})
    stock!: number;

    @ManyToOne(() => Store, (store) => store.product)
    storeId!: number;

    @OneToMany(() => Review, (review) => review.productId)
    reviews!: Review[];

    @ManyToOne(() => Category, (category) => category.products, {eager: true})
    category!: Category;

    @OneToMany(() => ProductImages, (productImages) => productImages.product)
    images!: ProductImages[]
}