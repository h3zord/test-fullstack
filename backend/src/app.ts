import express from 'express'
import { customerRouter } from './routes/customer'
import { LoginRouter } from './routes/login'
import { errorHandler } from './middlewares/errorHandler'

export const app = express()

app.use(express.json())

app.use('/login', LoginRouter)
app.use('/customer', customerRouter)

app.use(errorHandler)
