/**
 * Category Model
 * @module models/categoryModel
 * @requires typeorm
 * @see {@link https://typeorm.io/|TypeORM}
 * 
 * @example
 * import { Category } from './src/models/categoryModel';
 * // Define a new category
 * const newCategory = new Category();
 * newCategory.id = 1;
 * newCategory.name = 'Electronics';
 * await categoryRepository.save(newCategory);
 * @author Dicxie Madrigal Brack <dicxiemadrigal@gmai.com>
 */
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Product } from "./productModel";

@Entity('categories')
export class Category {
    @PrimaryGeneratedColumn()
    idCategory!: number;

    @Column({type: 'varchar', length:100, unique: true})
    nane!: string;

    @Column({type: 'text'})
    description!: string;

    @OneToMany(() => Product, (product)=> product.category)
    products!: Product[];
}