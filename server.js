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
import next from "next";
import adminRoutes from './src/routes/admin.js'
import tournamentRoutes from "./src/routes/tournament.js";


// Defini si nous sommes en production ou en developpement
const dev = process.env.NODE_ENV !== "production";

const PORT = process.env.PORT ;
const nextApp = next({ dev, dir: "./emy_app" });
const handle = nextApp.getRequestHandler();

await nextApp.prepare();

const app=express()
const MemoryStore=memorystore(session)

//app.use(helmet())
app.use(cors())
app.use(compression())
app.use(express.json())
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
// API de routes
app.use('/api',router)
app.use('/api/admin', adminRoutes)
app.use("/api", tournamentRoutes);
// API pour tester le backend
app.get("/api/health", (req, res) => res.json({ ok: true }));


// Specifier que toutes les requêtes restantes, Next.js s’en occupe
// Doit toujours etre place apres toutes les requetes HTTP
app.all(/.*/, (req, res) => handle(req, res));

app.listen(PORT, () => {
  console.log(`Serveur unique: http://localhost:${PORT} (dev=${dev})`);
});