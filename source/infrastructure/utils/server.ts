import express from "express";
import cors from "express";
import v1Router from "../v1/route/megaverse.route";
import swaggerUI from "swagger-ui-express";

function createServer() {
    const app = express();
    app.use(cors());
    app.use(express.json());

    app.use("/api/v1", v1Router);
    app.use("/docs", swaggerUI.serve);

    return app;
}

export default createServer;