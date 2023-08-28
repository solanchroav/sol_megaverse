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
exports.PolyanetUseCase = void 0;
//import { UserValue } from "../domain/user.value";
class PolyanetUseCase {
    constructor(polyanetRepository) {
        this.polyanetRepository = polyanetRepository;
        this.createPolyanet = ({ candidateId, row, column }) => __awaiter(this, void 0, void 0, function* () {
            //const userValue = new UserValue()
            const polyanetCreated = yield this.polyanetRepository.createPolyanet(candidateId, row, column);
            return polyanetCreated;
        });
        this.deletePolyanet = ({ candidateId, row, column }) => __awaiter(this, void 0, void 0, function* () {
            //const userValue = new UserValue()
            const polyanetDeleted = yield this.polyanetRepository.deletePolyanet(candidateId, row, column);
            return polyanetDeleted;
        });
    }
}
exports.PolyanetUseCase = PolyanetUseCase;
//# sourceMappingURL=polyanetUseCase.js.map