import  { pool } from '../services/postgres.config'
import { Request, Response } from 'express'
import { QueryResult } from 'pg'



 export const getProduct = async ( req:Request ,res:Response )  => {
  
    try{
        const getResult: QueryResult = await pool.query('SELECT * FROM products')    
        res.json(getResult.rows)
    } 
    catch (error) {
        return res.status(500).json("Error Interno")
    }   
    }



export const getProductById = async ( req:Request ,res:Response ): Promise<Response>  => {

    const { id } = req.params
  
    try{
        const getResult: QueryResult = await pool.query('SELECT * FROM products WHERE sku = $1', [id])    
    
        return  res.status(200).json(getResult.rows)
    } 
    catch (error) {
        return res.status(500).json("Internal Server Error")
    }   
    }
    

export const postProduct = async ( req:Request ,res:Response ): Promise<Response>  => {

    const { sku, title , price , description, category } = req.body    

    try{
        const result: QueryResult = await pool.query(
            "INSERT INTO products ( sku, title , price , description, category ) VALUES ( $1, $2, $3, $4, $5 ) RETURNING * ", 
            [sku, title , price , description, category]
            )
            
            
           return  res.json(result.rows[0])    
    } 
    catch (error) {
        return res.status(500).json("Error Interno")      
    } 
}



export const putProduct = async (req: Request, res: Response): Promise<Response> => {
    
    try {
        const { id } = req.params
        const { title , price , description, category } = req.body;
        const result: QueryResult = await pool.query("UPDATE products SET  title = $1, price = $2, description = $3, category = $4  WHERE sku = $5", [  title , price , description, category, id])
        if (result.rowCount > 0) {
            return res.json({
                message: `Product with id:${id} has been edited`
            });
        } else {
            return res.status(500).json("Internal Server Error");
        }
    } catch (error) {
        
        return res.status(500).json("Internal Server Error")
    } 
}



export const deleteProduct = async ( req:Request ,res:Response ): Promise<Response>  => {
    
    try {        
        const { id } = req.params
        const result: QueryResult = await pool.query("DELETE FROM products WHERE sku = $1", [id])
        if (result.rowCount > 0) {
            return res.json({
                message: `Product with id:${id}  has been removed`
            })
        } else {
            return res.status(500).json("Internal Server Error");
        }
    } catch (error) {
        
        return res.status(500).json("Internal Server Error")
    }
}
   



   

