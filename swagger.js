const swaggerAutogen = require('swagger-autogen')();
// require('dotenv').config();

// const config = {
//   authRequired: false,
//   auth0Logout: true,
//   secret: process.env.SECRET,
//   baseURL: process.env.BASEURL,
//   clientID: process.env.CLIENTID,
//   issuerBaseURL: process.env.ISSUER,
// };

const doc = {
  info: {
    title: 'Reunion API',
    description: 'Reunion Sites API',
  },
  //host: 'localhost:8080',
  host: 'cse341-project2-2uol.onrender.com',
  schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);

// Run server after it gets generated
// swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
//   await import('./index.js');
// });
