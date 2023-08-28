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
exports.ComethRepository = void 0;
const MegaverseApi_1 = require("../api/MegaverseApi");
class ComethRepository {
    createCometh(candidateId, row, column, direction) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield (0, MegaverseApi_1.createCometh)(candidateId, row, column, direction);
                return response; // Return the API response
            }
            catch (error) {
                console.error('Error creating Cometh:', error);
                throw new Error('Error creating Cometh: ' + error.message);
            }
        });
    }
    deleteCometh(candidateId, row, column) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield (0, MegaverseApi_1.deleteCometh)(candidateId, row, column);
                return response; // Return the API response
            }
            catch (error) {
                console.error('Error deleting Cometh:', error);
                throw new Error('Error deleting Cometh: ' + error.message);
            }
        });
    }
}
exports.ComethRepository = ComethRepository;
//# sourceMappingURL=ComethRepository.js.map