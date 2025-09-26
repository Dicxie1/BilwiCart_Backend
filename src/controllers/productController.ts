import { Request, Response } from "express";
import { ProductService } from "../services/productService";
import { sendSuccess, sendError } from "../utils/apiResponse";
export class ProductController{
    static async getAllProducts(req: Request, res: Response): Promise<any>{
        try {
            const products = await ProductService.findAll;
            if(!products || products.length === 0){
                return sendError(res, "No hay productos disponibles");
            }
            sendSuccess(res, products, "Productos obtenidos exitosamente");
        } catch (error) {
            sendError(res, "Error al obtener los productos");
        }
    }
    static async createProduct(req: Request, res: Response){

    }
}