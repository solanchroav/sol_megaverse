"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const appConfig_1 = require("./config/appConfig");
const swagger_1 = require("./infrastructure/v1/swagger");
const server_1 = __importDefault(require("./infrastructure/utils/server"));
const app = (0, server_1.default)();
const PORT = appConfig_1.PORT;
app.listen(PORT, () => {
    console.log(`Server running on Port: ${PORT}`);
    (0, swagger_1.setupSwaggerDocs)(app, PORT);
});
//# sourceMappingURL=index.js.map