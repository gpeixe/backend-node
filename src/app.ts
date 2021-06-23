import { setupMiddlewares } from './middlewares'
import { setupRoutes } from './routes'
import express from 'express'
import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/backend-tc2', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection
const app = express()

function startApp() {
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    setupMiddlewares(app)
    setupRoutes(app)
    app.listen(4000)
    console.log('listening at 4000!')
  });
}

startApp()
export default startApp

