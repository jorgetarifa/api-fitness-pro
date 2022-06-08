import  { pool } from '../services/postgres.config'
import { Request, Response } from 'express'
import { QueryResult } from 'pg';

 export const getUsers = async ( req:Request ,res:Response ): Promise<Response>  => {
  
    try{
        const getResult: QueryResult = await pool.query('SELECT * FROM users')    
        return res.status(200).json(getResult.rows)
    } 
    catch (error) {
        return res.status(500).json("Internal Server Error")
    }   
    }



export const getUsersById = async ( req:Request ,res:Response ): Promise<Response>  => {

    const { id } = req.params
  
    try{
        const getResult = await pool.query('SELECT * FROM users WHERE id = $1', [id])    
    
        return  res.status(200).json(getResult.rows)
    } 
    catch (error) {
        return res.status(500).json("Internal Server Error")
    }   
    }
    


export const postUser= async ( req:Request ,res:Response ): Promise<Response>  => {

    const { name, lastname, email, identity_card } = req.body    

    try{
        const result: QueryResult = await pool.query(
            "INSERT INTO users ( name, lastname,email, identity_card ) VALUES ( $1, $2, $3, $4 ) RETURNING * ", 
            [name, lastname,email, identity_card]
            )
            
            
           return  res.json(result.rows[0])    
    } 
    catch (error) {
        return res.status(500).json("Error Interno")      
    } 
}




export const putUser = async (req: Request, res: Response): Promise<Response> => {
    
    try {
        const { id } = req.params
        const { name, lastname,email, identity_card } = req.body;
        const result: QueryResult = await pool.query("UPDATE users SET name = $1, lastname = $2, email = $3, identity_card = $4  WHERE id = $5", [name, lastname,email, identity_card, id])
        if (result.rowCount > 0) {
            return res.json({
                message: `User with id:${id} has been edited`
            })
        } else {
            return res.status(500).json("Internal Server Error");
        }
    } catch (error) {
        
        return res.status(500).json("Internal Server Error")
    } 
}

export const deleteUser = async ( req:Request ,res:Response ): Promise<Response>  => {
    
    try {        
        const { id } = req.params
        const result: QueryResult = await pool.query("DELETE FROM users WHERE id = $1", [id])
        if (result.rowCount > 0) {
            return res.json({
                message: `Product with id:${id}  has been removed`
            });
        } else {
            return res.status(500).json("Internal Server Error")
        }
    } catch (error) {
        
        return res.status(500).json("Internal Server Error")
    }
}
   

