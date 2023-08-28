"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = exports.MEGAVERSE_API_URL = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.MEGAVERSE_API_URL = process.env.MEGAVERSE_API_URL || 'https://challenge.crossmint.io';
exports.PORT = parseInt(process.env.PORT || '3008', 10);
//# sourceMappingURL=appConfig.js.map