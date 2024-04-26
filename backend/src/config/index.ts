import dotenv from 'dotenv'
dotenv.config()

export const DATABASE_NAME = process.env.DATABASE_NAME
export const DATABASE_USER = process.env.DATABASE_USER
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD
export const DATABASE_HOST = process.env.DATABASE_HOST
export const TOKEN_KEY = process.env.TOKEN_KEY