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

const connString = (process.env.POSTGRES_URI) ? process.env.POSTGRES_URI : 'postgresql://postgres:changeme@localhost:5432/wallet';
const pgp = pgPromise()
const db1 = pgp(connString)

export {db, db1}