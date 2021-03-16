import express from 'express'
import bodyParser from 'body-parser'
import './config/environment'
import { ConfigControllers } from './config'
import { ApiKeySecurityMiddleware, ErrorMiddleware } from './middleware'

const app = express()
const apiKeySecurity = ApiKeySecurityMiddleware()
const errorMiddlware = ErrorMiddleware()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(apiKeySecurity.checkApiKey)

ConfigControllers(app)

app.use(errorMiddlware.errorHandler)

app.listen(3000, () => {
  console.log('Dojo Sumicity Listen on Port: ' + 3000)
})
