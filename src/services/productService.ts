/**
 * 
 */
import { Product } from "../models/productModel";
import { AppDataSource } from "../config/db";
import { ILike } from "typeorm";
export class ProductService{
    private static productRepository = AppDataSource.getRepository(Product);
    /**
     * @description procedimiento que devuelve la de todos lo productos
     * @returns Promise<Product | null>
     */
    static async getProducts() : Promise<Product[]>{
        return  this.productRepository.find();
    }

    static async findByID(id: number) : Promise<Product | null>{
        return await this.productRepository.findOneBy({idProduct: id});
    }

    static async getProductsByName( name: string, limit: number = 10) : Promise<Product[]>{
        const products = this.productRepository.find({
            where: {name: ILike(`%${name}%`)},
            take: limit
        });
        return products;
    }

    static async getDescoutProducts( limit: number = 0) : Promise<Product[]>{
        if( limit === 0){
            return await this.productRepository.find({where: {isDiscout: true}})
        }
        return await this.productRepository.find({where: {isDiscout: true}, take: limit})
    }
}