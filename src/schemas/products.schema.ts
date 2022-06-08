import Joi from "joi";

export const usuarioSchema = Joi.object({
   
    title: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
    category: Joi.string().required()
    
})