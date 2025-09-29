import { Store } from "../models/storeModel";
import { AppDataSource } from "../config/db";
import { Product } from "../models/productModel";

export class StoreService{
    private static storeRepository = AppDataSource.getRepository(Store);
    private static productRepository = AppDataSource.getRepository(Product);

    static async getStore( idStore: number, id: number): Promise<Store | null>{
        return this.storeRepository.createQueryBuilder("store")
            .leftJoinAndSelect("store.user", "user")
            .where("store.idStore = :idStore", {idStore})
            .andWhere("user.id = :id", {id})
            .getOne();
    }

    static async setStoreProduct(productData: Omit<Product , 'idProduct'>): Promise<Product | null>{
        try{
            const product = this.productRepository.create(productData);
            const productSave = this.productRepository.save(product);
            return productSave;
        }catch(error){
            if(error instanceof Error){
                throw new Error(error.message);
            }
            throw new Error('Error al crear el producto' );
        }
    }
}