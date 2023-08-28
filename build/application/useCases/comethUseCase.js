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
exports.ComethUseCase = void 0;
class ComethUseCase {
    constructor(comethRepository) {
        this.comethRepository = comethRepository;
        this.createCometh = ({ candidateId, row, column, direction }) => __awaiter(this, void 0, void 0, function* () {
            try {
                const comethCreated = yield this.comethRepository.createCometh(candidateId, row, column, direction);
                return comethCreated;
            }
            catch (error) {
                console.error('Error creating cometh:', error);
                throw new Error('Failed to create cometh');
            }
        });
        this.deleteCometh = ({ candidateId, row, column }) => __awaiter(this, void 0, void 0, function* () {
            try {
                const deleteCometh = yield this.comethRepository.deleteCometh(candidateId, row, column);
                return deleteCometh;
            }
            catch (error) {
                console.error('Error deleting cometh:', error);
                throw new Error('Failed to delete cometh');
            }
        });
    }
}
exports.ComethUseCase = ComethUseCase;
//# sourceMappingURL=comethUseCase.js.map