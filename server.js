const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const port = 6002

const authRouter = require('./routes/auth')

dotenv.config()

const admin = require('firebase-admin');
const serviceAccunt = require('./servicesAccountKey.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccunt)
})

mongoose.connect(process.env.MONGO_URL).then(()=> console.log('Banco de dados conectado com sucesso')).catch((err) => console.log(err))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use('/', authRouter); 

app.get('/', (req, res) => res.send('Olá Sócio'))
app.listen(process.env.PORT || port, () => console.log(`back end do app esta rodando na porta ${process.env.PORT}`))

