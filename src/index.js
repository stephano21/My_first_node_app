import express from "express";  //NO me funciona pero si esta bien
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'


import indexRoute from './routes/index.js'

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(indexRoute)

app.use(express.static(join(__dirname,'public')))
app.listen(process.env.PORT || 3000, () =>
  console.log('Example app listening on port',process.env.PORT|| '3000!'),

);