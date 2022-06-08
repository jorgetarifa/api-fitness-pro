import { Pool } from "pg"
 import dotenv from "dotenv"
 dotenv.config()

export const pool = new Pool({
    host: process.env.POSTGRES_HOST_DB,
    user: process.env.POSTGRES_USER_DB,
    password: process.env.POSTGRES_PASS_DB,
    database: process.env.POSTGRES_NAME_DB,
    port: 5432,
    max: 20, 
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
})