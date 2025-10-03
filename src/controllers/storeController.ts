import { StoreService } from "../services/storeService";
import { sendError, sendSuccess } from "../utils/apiResponse";


export class StoreController{
    static async dashboard(req: any, res: any){
        const {idStore, owner} = req.body;
        if(!idStore || !owner){
            return sendError(res, "Faltan parametros");
        }
        console.log(idStore, owner);
        try {
            const stores = await StoreService.getStore(idStore, owner);
            if(!stores){
                return sendError(res, "No hay tiendas disponibles");
            }
            sendSuccess(res, stores, "Tiendas obtenidas exitosamente");
        } catch (error) {
            if(error instanceof Error){
                return sendError(res, error.message, 400);
            }
            sendError(res, "Error al obtener las tiendas", 500);
        }
    }
    static async setStoreProduct(req: any, res: any){
        const Product = req.body;
        if(!Product){
            return sendError(res, "Faltan parametros");
        }
        else{
            const {name, description, price, status, category, stock, storeId} = req.body;
            if(!name || !description || !price || !status || !category || !stock || !storeId){
                return sendError(res, "Faltan parametros");
            }
        }
        try {
            const product = await StoreService.setStoreProduct(Product);
            if(!product){
                return sendError(res, "No se pudo crear el producto");
            }
            sendSuccess(res, product, "Producto creado exitosamente");
        } catch (error) {
            if(error instanceof Error){
                return sendError(res, error.message, 400);
            }
            sendError(res, "Error al crear el producto", 500);
        }  
    }
}
