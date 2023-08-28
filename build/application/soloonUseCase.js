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
exports.SoloonUseCase = void 0;
class SoloonUseCase {
    constructor(soloonRepository) {
        this.soloonRepository = soloonRepository;
        this.createSoloon = ({ candidateId, row, column, color }) => __awaiter(this, void 0, void 0, function* () {
            //const userValue = new UserValue()
            const soloonCreated = yield this.soloonRepository.createSoloon(candidateId, row, column, color);
            return soloonCreated;
        });
        this.deleteSoloon = ({ candidateId, row, column }) => __awaiter(this, void 0, void 0, function* () {
            //const userValue = new UserValue()
            const soloonDeleted = yield this.soloonRepository.deleteSoloon(candidateId, row, column);
            return soloonDeleted;
        });
    }
}
exports.SoloonUseCase = SoloonUseCase;
//# sourceMappingURL=soloonUseCase.js.map