import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import swaggerUi from 'swagger-ui-express'
import YAML from 'yamljs';
import router from './src/routes/routes.js'
import { auth } from 'express-oauth2-jwt-bearer';

// initialize express
const app = express()

// to be able to parse http requests
app.use(bodyParser.json());

// add jwt token validation for request authorization
// const jwtCheck = auth({
//   audience: 'https://ai-board.com',
//   issuerBaseURL: 'https://dev-yj7x4hnhi01sgglu.us.auth0.com/',
//   tokenSigningAlg: 'RS256'
// });
// app.use('/completion', jwtCheck); // enforce on non-test endpoints

// to read .env file
console.log(process.env.MONGODB_PASSWORD)
dotenv.config()

//set up routing
app.use('/', router)

//set up swagger for OpenApi documentation and an OpenAPI validator
// const swaggerFilePath = "./documentation/swagger/swagger.yaml"
// const swaggerDocument = YAML.load(swaggerFilePath);
// app.use(
//   "/api-docs",
//   swaggerUi.serve,
//   swaggerUi.setup(swaggerDocument)
// );
// app.use(
//   OpenApiValidator.middleware({
//     apiSpec: swaggerFilePath,
//     validateRequests: true, // (default)
//     validateResponses: false, // (default)
//   }),
// );

// start http server
const port = 3000
app.listen(port, () => {
  console.log(`Bardo Backend listening on port: ${port}`)
})