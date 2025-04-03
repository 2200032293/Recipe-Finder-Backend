const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Recipe Finder API",
      version: "1.0.0",
      description: "API documentation for Recipe Finder App",
    },
    servers: [{ url: "https://recipe-finder-backend-production.up.railway.app/" },
              {url: "http://34.205.144.252:3000/"}],
  },
  apis: ["./routes/*.js"], // Specify route files for API documentation
};

const swaggerSpec = swaggerJsdoc(options);

const swaggerDocs = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log("Swagger Docs available at https://recipe-finder-backend-production.up.railway.app/api-docs and http://34.205.144.252:3000/api-docs");
};

module.exports = swaggerDocs;
