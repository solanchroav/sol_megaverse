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
exports.XPatternService = void 0;
// function rotateClockwise(direction: string): string {
//   switch (direction.toLowerCase()) {
//     case "up":
//       return "right";
//     case "left":
//       return "up";
//     case "down":
//       return "left";
//     case "right":
//       return "down";
//     default:
//       console.error("Invalid direction");
//       return "";
//   }
// }
class XPatternService {
    constructor(polyanetUseCase, soloonUseCase, comethUseCase) {
        this.polyanetUseCase = polyanetUseCase;
        this.soloonUseCase = soloonUseCase;
        this.comethUseCase = comethUseCase;
    }
    createXPatternFromGoalMap({ candidateId }, goal) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //const creationPromises = [];
                for (let row = 0; row < goal.length; row++) {
                    for (let column = 0; column < goal[row].length; column++) {
                        const entity = goal[row][column];
                        if (entity === 'POLYANET') {
                            yield this.polyanetUseCase.createPolyanet({ candidateId, row, column });
                        }
                        else if (entity.includes('SOLOON')) {
                            const color = entity.split('_')[0].toLowerCase();
                            yield this.soloonUseCase.createSoloon({ candidateId, row, column, color });
                        }
                        else if (entity.includes('COMETH')) {
                            const direction = entity.split('_')[0].toLowerCase();
                            //const direction = rotateClockwise(getDirection);
                            yield this.comethUseCase.createCometh({ candidateId, row, column, direction });
                        }
                    }
                }
                //await Promise.all(creationPromises);
            }
            catch (error) {
                console.error('Error creating X pattern:', error);
                throw new Error('Failed to create X pattern');
            }
        });
    }
}
exports.XPatternService = XPatternService;
//# sourceMappingURL=xPatternService.js.map