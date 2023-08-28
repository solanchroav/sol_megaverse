"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.polyanetSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const polyanetSchema = joi_1.default.object({
    candidateId: joi_1.default.string().required(),
    row: joi_1.default.number().integer().positive().required(),
    column: joi_1.default.number().integer().positive().required(),
});
exports.polyanetSchema = polyanetSchema;
//# sourceMappingURL=polyanetSchema.js.map