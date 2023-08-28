"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const polyanetUseCase_1 = require("../../application/polyanetUseCase");
const comethUseCase_1 = require("../../application/comethUseCase");
const soloonUseCase_1 = require("../../application/soloonUseCase");
const goalMapUseCase_1 = require("../../application/goalMapUseCase");
const megaverse_ctrl_1 = require("../controller/megaverse.ctrl");
const PolyanetRepository_1 = require("../repository/PolyanetRepository");
const ComethRepository_1 = require("../repository/ComethRepository");
const SoloonRepository_1 = require("../repository/SoloonRepository");
const GoalMapRepository_1 = require("../repository/GoalMapRepository");
const xPatternService_1 = require("../../application/Services/xPatternService");
const route = (0, express_1.Router)();
/**
 * Initialize repository
 */
const polyanetRepo = new PolyanetRepository_1.PolyanetRepository();
const comethRepo = new ComethRepository_1.ComethRepository();
const soloonRepo = new SoloonRepository_1.SoloonRepository();
const goalMapRepo = new GoalMapRepository_1.GoalMapRepository();
/**
 * Initialize use cases
 */
const polyanetUseCase = new polyanetUseCase_1.PolyanetUseCase(polyanetRepo);
const comethUseCase = new comethUseCase_1.ComethUseCase(comethRepo);
const soloonUseCase = new soloonUseCase_1.SoloonUseCase(soloonRepo);
const goalMapUseCase = new goalMapUseCase_1.GoalMapUseCase(goalMapRepo);
const xPatternService = new xPatternService_1.XPatternService(polyanetUseCase, soloonUseCase, comethUseCase);
/**
 * Initialize controller
 */
const megaverseCtrl = new megaverse_ctrl_1.MegaverseController(polyanetUseCase, comethUseCase, soloonUseCase, goalMapUseCase, xPatternService);
/**
 *
 */
route.post(`/polyanet`, megaverseCtrl.insertPolyanet);
route.post(`/cometh`, megaverseCtrl.insertCometh);
route.post(`/soloon`, megaverseCtrl.insertSoloon);
route.post(`/create-x-pattern_from_goal`, megaverseCtrl.insertXPatternFromGoal);
route.delete(`/polyanet`, megaverseCtrl.deletePolyanet);
route.delete(`/cometh`, megaverseCtrl.deleteCometh);
route.delete(`/soloon`, megaverseCtrl.deleteSoloon);
route.get(`/goalmap`, megaverseCtrl.getGoalMap);
exports.default = route;
//# sourceMappingURL=megaverse.route.js.map