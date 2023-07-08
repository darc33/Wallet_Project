import { knex } from "knex";
import dotenv from 'dotenv'
import configDb from '../db/knexfile'

configDb

dotenv.config()//{path: './.env'})
const db = knex({
    client: 'pg',
    connection: {
        host: 'localhost', //'postgres_container'
        user: 'postgres',
        password: process.env.PSW,
        database: 'wallet',
        port: 5432,
    },
})

export {db}