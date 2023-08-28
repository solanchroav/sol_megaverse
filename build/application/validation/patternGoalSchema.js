"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.patternGoalSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const patternGoalSchema = joi_1.default.object({
    candidateId: joi_1.default.string().required(),
});
exports.patternGoalSchema = patternGoalSchema;
//# sourceMappingURL=patternGoalSchema.js.map