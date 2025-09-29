import { Request, Response } from "express";
import { ProductService } from "../services/productService";
import { sendSuccess, sendError } from "../utils/apiResponse";
import { Product } from "../models/productModel";
import { error } from "console";
import { And } from "typeorm";
export class ProductController{
    static async getProducts(req: Request, res: Response): Promise<Product[]>{
        try{
            const products = await ProductService.getProducts();
            sendSuccess(res, products, 'se ha recuperado los registro', 200);
            return products;
        }catch(error){
            if(error instanceof Error){
                sendError(res, error.message, 500);
            }
            sendError(res, 'No se ha podido buscar ', 400);
            return [];
        }
    }
    static async createProduct(req: Request, res: Response){
        throw new Error('no se ha implementado')
    }
    static async searchProducts(req: Request, res: Response){
        throw new Error('no se ha implementado')
    }

    static async getDescountProduct(req: Request, res: Response){
        try{
            const {isDiscout } = req.query
            if(typeof isDiscout === 'string'){
                const descoutNumber = parseInt(isDiscout);
                console.log(descoutNumber);
                const producutsDescount = await ProductService.getDescoutProducts();
                sendSuccess(res,producutsDescount, 'se recuperado los registo', 200);
            }else if (typeof isDiscout === undefined){
                sendError(res, 'requiera cantidad ', 500);
            }else{
                sendError(res, 'uno hay parametro', 500);
            }
        }catch(error){
        if(error instanceof Error) {sendError(res, error.message,500)}
        sendError(res, 'No se ha obtener el descuento')
    }
    }
}