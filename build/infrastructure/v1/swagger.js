"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwaggerDocs = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const appConfig_1 = require("../../config/appConfig");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const options = {
    definition: {
        openapi: "3.0.0",
        info: { title: "MEGAVERSE API", version: "1.0.0" },
        servers: [{
                url: `http://localhost:${appConfig_1.PORT}`
            }]
    },
    apis: ["./source/infrastructure/v1/route/megaverse.route.ts"],
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
// Function to setup our docs
const setupSwaggerDocs = (app, port) => {
    // Route-Handler to visit our docs
    app.use("/api/v1/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
    // Make our docs in JSON format available
    app.get("/api/v1/docs.json", (_req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
    });
    console.log(`Version 1 Docs are available on http://localhost:${port}/api/v1/docs`);
};
exports.setupSwaggerDocs = setupSwaggerDocs;
//# sourceMappingURL=swagger.js.map