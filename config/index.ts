import dotenv from "dotenv"

dotenv.config()

export const APP_HOST = process.env.APP_HOST
export const APP_PORT = process.env.APP_PORT
export const DATABASE_URL = process.env.DATABASE_URL
export const JWT_KEY = process.env.JWT_KEY
export const JWT_EXPIRE = process.env.JWT_EXPIRE