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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolyanetRepository = void 0;
const MegaverseApi_1 = require("../api/MegaverseApi");
class PolyanetRepository {
    createPolyanet(candidateId, row, column) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield (0, MegaverseApi_1.createPolyanet)(candidateId, row, column);
                return response; // Return the API response
            }
            catch (error) {
                console.error('Error creating Polyanet:', error);
                throw new Error('Error creating Polyanet: ' + error.message);
            }
        });
    }
    deletePolyanet(candidateId, row, column) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield (0, MegaverseApi_1.deletePolyanet)(candidateId, row, column);
                return response; // Return the API response
            }
            catch (error) {
                console.error('Error deleting Polyanet:', error);
                throw new Error('Error deleting Polyanet: ' + error.message);
            }
        });
    }
}
exports.PolyanetRepository = PolyanetRepository;
//# sourceMappingURL=PolyanetRepository.js.map