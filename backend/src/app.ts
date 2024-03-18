import 'express-async-errors'
import express from 'express'
import cors from 'cors'
import { customerRouter } from './routes/customer'
import { LoginRouter } from './routes/login'
import { errorHandler } from './middleware/errorHandler'

export const app = express()

app.use(express.json())
app.use(cors())

app.use('/login', LoginRouter)
app.use('/customer', customerRouter)

app.use(errorHandler)
