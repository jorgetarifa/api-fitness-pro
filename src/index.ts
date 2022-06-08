import express, { Application, Request, Response } from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import { UsersRoute } from './routes/users.route'
import { RouterProduct } from './routes/products.route'
import authRouter from './routes/auth.route'


const app: Application = express()
const PORT = process.env.PORT || 5100

  app.use(morgan('dev'))
  app.use(express.json())
  app.use(cors())
  app.use(express.urlencoded({ extended: false }))



const swaggerOptions = {
  definition: {
      openapi: '3.0.0',
      info: {
          title: 'API Users',
          version: '1.0.0'
      },
      servers: [
          {
              url: `http://localhost:${PORT}`
          }
      ]
  }, 
  apis: ['./dist/docs/*.js']
}




const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocs))



  app.use(UsersRoute)
  app.use(RouterProduct)
  app.use(authRouter)

  app.listen( PORT, () => console.log(`Running on: http://localhost:${PORT}`))

        

   