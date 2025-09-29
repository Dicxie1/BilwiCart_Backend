import {Entity, PrimaryGeneratedColumn,OneToOne, JoinColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { Store } from './storeModel'
import { User } from "./userModel";

export enum statusType{
    ACTIVE = 'active',
    SUSPENDED = 'suspended',
    PENDING = 'pending',
    INACTIVE = 'inactive'
}

@Entity()
export class Vendor{
    @PrimaryGeneratedColumn()
    venidorid!: number;

    @Column({ type: 'varchar', length:100, unique: true, nullable: false})
    vendorID!: string;

    @Column({ type: 'varchar', length: 40, nullable: true})
    idType!: string;

    @Column({ type: 'boolean', default: true, nullable: true})
    verified!: boolean;

    @Column ({ type: "enum" ,  enum: statusType ,default: statusType.PENDING})
    status!: string;

    @CreateDateColumn({name: 'create_at'})
    createAt!: Date;
    
    @UpdateDateColumn({name: 'update_at'})
    updateAt!: Date;

    @OneToOne(()=> User)
    @JoinColumn()
    user!: User;

    @OneToOne(()=> Store, (store)=> store.vendor)
    @JoinColumn()
    store!: Store;
}
