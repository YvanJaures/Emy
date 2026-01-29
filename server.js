import 'dotenv/config'
import express, { json } from 'express'
import helmet from 'helmet'
import cors from 'cors'
import compression from 'compression'
import sse from './src/middlewares/sse.js'
import passport from 'passport'
import session from 'express-session'
import memorystore from 'memorystore'
import routes from './src/routes/index.js'
const app=express()

const MemoryStore=memorystore(session)

app.use(helmet())
app.use(cors())
app.use(compression())
app.use(json())
app.use(session({
    name:process.env.npm_package_name,
    cookie:{maxAge:3600000},
    store:new MemoryStore({checkPeriod:3600000}),
    rolling:true,
    resave:false,
    saveUninitialized:false,
    secret:process.env.SESSION_SECRET
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(sse())
app.use(express.static('emy_app'))

app.use('/api',routes)

app.listen(process.env.PORT);
console.log('http://localhost:' + process.env.PORT);