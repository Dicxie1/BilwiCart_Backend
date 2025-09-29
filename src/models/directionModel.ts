/**
 * @fileoverview Modelo esquema de la tabla direcciones
 * @use
 * import {Direction} from './src/model/direction'; 
 */
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, ManyToOne, JoinColumn } from "typeorm";
import { Costumer } from "./costumerModel";
import { Product } from "./productModel";

@Entity()
export class Direction{
    @PrimaryGeneratedColumn()
    idDirection!: number;

    @Column({type: 'varchar', length: 100})
    city!: string;

    @Column({type: 'varchar', length: 100, default: 'Nicaragua'})
    country!: string;

    @Column ({type: 'varchar', length: 255})
    description!: string;

    @ManyToOne(()=> Costumer, (costumer)=> costumer.address)
    @JoinColumn()
    costumer!: Costumer;
}