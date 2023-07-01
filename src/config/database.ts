import { knex } from "knex";
import dotenv from 'dotenv'

dotenv.config({path: './.env'})
export const db = knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'warrior33',
        database: 'wallet',
        port: 5432,
    },
})

export default db