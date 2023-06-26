import express from 'express'
import dotenv from 'dotenv'
import router from './src/routes/routes.js'
import authRouter from './src/routes/authRoutes.js';
import cors from "cors"; 
import cookieParser from "cookie-parser";
import sessions from "express-session";
import RedisStore from "connect-redis"
import {createClient} from "redis"
import helmet from "helmet";
import fs from 'fs';
import https from 'https';

// initialize express
const app = express()

// to be able to parse http requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// cookie parser middleware
app.use(cookieParser());

// enable CORS
app.use(cors());
app.use(helmet());

// to read .env file
console.log(process.env.MONGODB_PASSWORD)
dotenv.config()

// protect API by requiring login
const loginRequired = (req, res, next) => {
  if (!(req.session && req.session.user)) {
    return res.status(401).json({ message: "user must log in to access this resource" })
  }
  next()
};

// add session cookie config and a reddis session datastore
let redisClient = createClient() // initialize client.
redisClient.connect().catch(console.error)
let redisStore = new RedisStore({ // Initialize store.
  client: redisClient,
  prefix: "myapp:",
})
app.use(sessions({
  store: redisStore,
  secret: "292gns9r8g9sh4590akw3d",
  saveUninitialized:true,
  cookie: { maxAge: 1000 * 60 * 60 },
  resave: false,
  httpOnly: true,
  secure: true,
  ephemeral: true
}))

//set up routing for data and auth
app.use('/', authRouter)
//add data routes
app.use('/data', loginRequired, router);


// start http server
const port = 3000
app.listen(port, () => {
  console.log(`Bardo backend http: ${port}`)
})

// // start https server for dev 
// const key = fs.readFileSync('./localhost-key.pem');
// const cert = fs.readFileSync('./localhost.pem');
// const server = https.createServer({key: key, cert: cert}, app);
// app.get('/home', (req, res) => { res.send('Bardo') }); // test route
// server.listen(3001, () => { console.log('Bardo backend https: 3001') });