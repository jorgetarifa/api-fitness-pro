import Joi from "joi";

export const usuarioSchema = Joi.object({
    nombres: Joi.string().required(),
    apellidos: Joi.string().required(),
    cedula: Joi.string().required()
    
})