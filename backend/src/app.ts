import express from 'express'
import { customerRouter } from './routes/customer'
import { LoginRouter } from './routes/login'

export const app = express()

app.use(express.json())

app.use('/login', LoginRouter)
app.use('/customer', customerRouter)
