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
exports.SoloonRepository = void 0;
const MegaverseApi_1 = require("../api/MegaverseApi");
class SoloonRepository {
    createSoloon(candidateId, row, column, color) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield (0, MegaverseApi_1.createSoloon)(candidateId, row, column, color);
                return response; // Return the API response
            }
            catch (error) {
                console.error('Error creating Soloon:', error);
                throw new Error('Error creating Soloon: ' + error.message);
            }
        });
    }
    deleteSoloon(candidateId, row, column) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield (0, MegaverseApi_1.deleteSoloon)(candidateId, row, column);
                return response; // Return the API response
            }
            catch (error) {
                console.error('Error deleting Soloon:', error);
                throw new Error('Error deleting Soloon: ' + error.message);
            }
        });
    }
}
exports.SoloonRepository = SoloonRepository;
//# sourceMappingURL=SoloonRepository.js.map