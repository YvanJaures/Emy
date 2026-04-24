import 'dotenv/config'
import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import compression from 'compression'
import sse from './src/middlewares/sse.js'
import passport from 'passport'
import session from 'express-session'
import memorystore from 'memorystore'
import router from './src/routes/global.js'
import routerAdmin from './src/routes/admin.js'
import routerCommunity from './src/routes/community.js'
import routerTournament from './src/routes/tournaments.js'
import routerSponsor from './src/routes/sponsor.js'
import { getRedis } from './src/services/redis.js'
import {RedisStore} from 'connect-redis';
//import next from 'next'

// Defini si nous sommes en production ou en developpement
const dev = process.env.NODE_ENV !== "production";
const redisClient = await getRedis()

const PORT = process.env.PORT ;
//const nextApp = next({ dev, dir: "./emy_app" });
//const handle = nextApp.getRequestHandler();

//await nextApp.prepare();

const app=express()
const MemoryStore=memorystore(session)

app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" },
  crossOriginOpenerPolicy: false,
})) 
app.use(cors({
  origin: process.env.EMY_URL,
  credentials: true
}))

app.use(compression())
app.use(express.json())
app.use(session({
  store: redisClient ? new RedisStore({ client: redisClient }) : new MemoryStore({checkPeriod:3600000}),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: true,
    httpOnly: true,
    sameSite: 'none',
    maxAge: 1000 * 60 * 60 * 2 // 2 heures
  }
}));
app.use(passport.initialize())
app.use(passport.session())
app.use(sse())
// API de routes
app.use('/api',router)
app.use('/api',routerAdmin)
app.use('/api',routerSponsor)
app.use('/api',routerCommunity)
app.use('/api',routerTournament)
// API pour tester le backend
app.get("/api/health", (req, res) => res.json({ ok: true }));
app.get("/api/test", (req, res) => res.json({ message: "Salut! Je fonctionne très bien." }))


// Specifier que toutes les requêtes restantes, Next.js s’en occupe
// Doit toujours etre place apres toutes les requetes HTTP
//app.all(/.*/, (req, res) => handle(req, res));

app.listen(PORT, () => {
  console.log(`Serveur unique: http://localhost:${PORT} (dev=${dev})`);
});
