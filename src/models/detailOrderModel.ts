import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, Index } from "typeorm";
import { Order } from "./orderModel";
import { Product } from "./productModel";

@Entity()
@Index(['order', 'product'], { unique: true })
export class DetailOrder {
    @PrimaryGeneratedColumn()
    idDetailOrder!: number;

    @Column({type: 'int'})
    quantity!: number;

    @Column({})
    subTotal!: number;

    @ManyToOne(() => Order, (order) => order.idOrder)
    order!: Order;

    @ManyToOne(()=> Product, (product) => product.detailOrder)
    product!: number;
}