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
exports.GoalMapRepository = void 0;
const MegaverseApi_1 = require("../api/MegaverseApi");
class GoalMapRepository {
    getGoalMap(candidateId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield (0, MegaverseApi_1.getGoalMapByCandidateId)(candidateId);
                return response; // Return the API response
            }
            catch (error) {
                console.error('Error while fetching the goal map from the API: ', error);
                throw new Error('Error getting the goal map: ' + error.message);
            }
        });
    }
}
exports.GoalMapRepository = GoalMapRepository;
//# sourceMappingURL=GoalMapRepository.js.map