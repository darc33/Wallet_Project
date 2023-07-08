import dotenv from 'dotenv'
import { Knex } from 'knex'

dotenv.config()

const configDb: Knex.Config ={
    client: 'pg', 
    connection: {
        host: 'localhost', //'postgres_container'
        user: 'postgres',
        password: process.env.PSW,
        database: 'wallet',
        port: 5432,
    },
    migrations: {
        directory: './src/db/migrations',
        tableName: 'knex_migrations',
    }

}

export default configDb