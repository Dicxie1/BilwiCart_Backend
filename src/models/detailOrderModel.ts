import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Order } from "./orderModel";

@Entity()
export class DetailOrder {
    @PrimaryGeneratedColumn()
    idDetailOrder!: number;

    @Column({type: 'int'})
    productId!: number;

    @Column({type: 'int'})
    quantity!: number;

    @Column({})
    subTotal!: number;

    @ManyToOne(() => Order, (order) => order.idOrder)
    order!: Order;
}