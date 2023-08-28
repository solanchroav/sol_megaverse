"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSoloon = exports.deleteCometh = exports.deletePolyanet = exports.createSoloon = exports.createCometh = exports.createPolyanet = exports.getGoalMapByCandidateId = void 0;
const axios_1 = __importDefault(require("axios"));
const cockatiel_1 = require("cockatiel");
const appConfig_1 = require("../../config/appConfig");
const retryService = (0, cockatiel_1.retry)(cockatiel_1.handleAll, { maxAttempts: 3, backoff: new cockatiel_1.ExponentialBackoff({ initialDelay: 1000 }) });
const circuitBreakerService = (0, cockatiel_1.circuitBreaker)(cockatiel_1.handleAll, {
    halfOpenAfter: 10 * 1000,
    breaker: new cockatiel_1.ConsecutiveBreaker(5),
});
const retryWithBreaker = (0, cockatiel_1.wrap)(retryService, circuitBreakerService);
const getGoalMapByCandidateId = (candidateId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, cockatiel_1.retry)(cockatiel_1.handleAll, { maxAttempts: 3 }).execute(() => __awaiter(void 0, void 0, void 0, function* () { return yield axios_1.default.get(`${appConfig_1.MEGAVERSE_API_URL}/api/map/${candidateId}/goal`); }));
        return response.data;
    }
    catch (error) {
        throw new Error('Error getting the goal map: ' + error.message);
    }
});
exports.getGoalMapByCandidateId = getGoalMapByCandidateId;
const createPolyanet = (candidateId, row, column) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield retryWithBreaker.execute(() => __awaiter(void 0, void 0, void 0, function* () {
            return yield axios_1.default.post(`${appConfig_1.MEGAVERSE_API_URL}/api/polyanets`, {
                candidateId: candidateId,
                row: row,
                column: column
            });
        }));
        return response.data;
    }
    catch (error) {
        throw new Error('Error creating Polyanet: ' + error.message);
    }
});
exports.createPolyanet = createPolyanet;
const createCometh = (candidateId, row, column, direction) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield retryWithBreaker.execute(() => __awaiter(void 0, void 0, void 0, function* () {
            return yield axios_1.default.post(`${appConfig_1.MEGAVERSE_API_URL}/api/comeths`, {
                candidateId: candidateId,
                row: row,
                column: column,
                direction: direction
            });
        }));
        return response.data;
    }
    catch (error) {
        throw new Error('Error creating Cometh: ' + error.message);
    }
});
exports.createCometh = createCometh;
const createSoloon = (candidateId, row, column, color) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield retryWithBreaker.execute(() => __awaiter(void 0, void 0, void 0, function* () {
            return yield axios_1.default.post(`${appConfig_1.MEGAVERSE_API_URL}/api/soloons`, {
                candidateId: candidateId,
                row: row,
                column: column,
                color: color
            });
        }));
        return response.data;
    }
    catch (error) {
        throw new Error('Error creating Soloon: ' + error.message);
    }
});
exports.createSoloon = createSoloon;
const deletePolyanet = (candidateId, row, column) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const requestBody = JSON.stringify({
            candidateId: candidateId,
            row: row,
            column: column
        });
        const customConfig = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const response = yield (0, cockatiel_1.retry)(cockatiel_1.handleAll, { maxAttempts: 3 }).execute(() => __awaiter(void 0, void 0, void 0, function* () { return yield axios_1.default.delete(`${appConfig_1.MEGAVERSE_API_URL}/api/polyanets`, Object.assign({ data: requestBody }, customConfig)); }));
        return response.data;
    }
    catch (error) {
        throw new Error('Error deleting Polyanet: ' + error.message);
    }
});
exports.deletePolyanet = deletePolyanet;
const deleteCometh = (candidateId, row, column) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const requestBody = JSON.stringify({
            candidateId: candidateId,
            row: row,
            column: column
        });
        const customConfig = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const response = yield (0, cockatiel_1.retry)(cockatiel_1.handleAll, { maxAttempts: 3 }).execute(() => __awaiter(void 0, void 0, void 0, function* () { return yield axios_1.default.delete(`${appConfig_1.MEGAVERSE_API_URL}/api/comeths`, Object.assign({ data: requestBody }, customConfig)); }));
        return response.data;
    }
    catch (error) {
        throw new Error('Error deleting Cometh: ' + error.message);
    }
});
exports.deleteCometh = deleteCometh;
const deleteSoloon = (candidateId, row, column) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const requestBody = JSON.stringify({
            candidateId: candidateId,
            row: row,
            column: column
        });
        const customConfig = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const response = yield (0, cockatiel_1.retry)(cockatiel_1.handleAll, { maxAttempts: 3 }).execute(() => __awaiter(void 0, void 0, void 0, function* () { return yield axios_1.default.delete(`${appConfig_1.MEGAVERSE_API_URL}/api/soloons`, Object.assign({ data: requestBody }, customConfig)); }));
        return response.data;
    }
    catch (error) {
        throw new Error('Error deleting Soloon: ' + error.message);
    }
});
exports.deleteSoloon = deleteSoloon;
//# sourceMappingURL=MegaverseApi.js.map