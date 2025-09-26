import { PrimaryGeneratedColumn, Column, ManyToOne, OneOrMore, OneToMany, Entity } from "typeorm";
import { User } from "./userModel";
import { DetailOrder } from "./detailOrderModel";
export enum OrderStatusEnum {
    PENDING = 'pending',
    SHIPPED = 'shipped',
    DELIVERED = 'delivered',
    CANCELED = 'canceled'
}

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    idOrder!: number;

    @Column({type: 'date'})
    orderDate!: Date;

    @Column({type: 'enum', enum: OrderStatusEnum, default: OrderStatusEnum.PENDING})
    status!: string;

    @ManyToOne(() => User, (user) => user.orders)
    user!: number;

    @OneToMany(() => DetailOrder, (detailOrder) => detailOrder.order)
    detailOrders!: DetailOrder[];
}