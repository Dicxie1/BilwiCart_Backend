/**
 * @fileoverview Modelo esquema de la tabla usuarios
 * @use
 * import {User} from './src/model/user'; 
 */
import { Entity, PrimaryGeneratedColumn, JoinColumn, OneToMany, OneToOne } from "typeorm"
import { Review } from "./reviewModel";
import { Order } from "./orderModel";
import { Direction } from "./directionModel";
import { User } from "./userModel";

@Entity()
export class Costumer{
    @PrimaryGeneratedColumn()
    id!: number;

    @OneToOne(()=> User)
    @JoinColumn()
    user!: User;

    @OneToMany(() => Review, (review) => review.costumer)
    reviews!: Review[]

    @OneToMany(()=> Order, (order)=> order.costumer)
    orders!: Order[];

    @OneToMany(()=> Direction, (direction)=> direction.costumer)
    address!: Direction[];
}