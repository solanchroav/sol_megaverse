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
exports.GoalMapUseCase = void 0;
class GoalMapUseCase {
    constructor(goalMapRepository) {
        this.goalMapRepository = goalMapRepository;
        this.getGoalMap = (candidateId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const goalMap = yield this.goalMapRepository.getGoalMap(candidateId);
                return goalMap;
            }
            catch (error) {
                console.error('Error getting the goal map:', error);
                throw new Error('Failed to get the goal map');
            }
        });
    }
}
exports.GoalMapUseCase = GoalMapUseCase;
//# sourceMappingURL=goalMapUseCase.js.map