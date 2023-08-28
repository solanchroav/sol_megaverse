"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = __importDefault(require("express"));
const megaverse_route_1 = __importDefault(require("../v1/route/megaverse.route"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
function createServer() {
    const app = (0, express_1.default)();
    app.use((0, express_2.default)());
    app.use(express_1.default.json());
    app.use("/api/v1", megaverse_route_1.default);
    app.use("/docs", swagger_ui_express_1.default.serve);
    return app;
}
exports.default = createServer;
//# sourceMappingURL=server.js.map