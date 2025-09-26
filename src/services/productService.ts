/**
 * 
 */
import { Product } from "../models/productModel";
import { AppDataSource } from "../config/db";

export class ProductService{
    private static productRepository = AppDataSource.getRepository(Product);

    static async findAll() : Promise<Product[]>{
        return await this.productRepository.find();
    }

    static async findByID(id: number) : Promise<Product | null>{
        return await this.productRepository.findOneBy({idProduct: id});
    }
}