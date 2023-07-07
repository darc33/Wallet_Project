import { knex } from "knex";
import dotenv from 'dotenv'
import pgPromise from 'pg-promise'

dotenv.config()//{path: './.env'})
const db = knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: process.env.PSW,
        database: 'wallet',
        port: 5432,
    },
})

export {db}