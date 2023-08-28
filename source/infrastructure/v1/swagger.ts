import { Express } from 'express';
import swaggerJSDoc from "swagger-jsdoc";
import { PORT as PORTCONFIG } from "../../config/appConfig";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: { title: "MEGAVERSE API", version: "1.0.0" },
    servers: [{
      url: `http://localhost:${PORTCONFIG}`
    }]
  },
  apis: ["./source/infrastructure/v1/route/megaverse.route.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

// Function to setup our docs
export const setupSwaggerDocs = (app: Express, port: number) => {
  // Route-Handler to visit our docs
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  // Make our docs in JSON format available
  app.get("/api/v1/docs.json", (_req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
  console.log(
    `Version 1 Docs are available on http://localhost:${port}/api/v1/docs`
  );
};
