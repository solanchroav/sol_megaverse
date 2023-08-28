"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const polyanetUseCase_1 = require("../../../application/useCases/polyanetUseCase");
const comethUseCase_1 = require("../../../application/useCases/comethUseCase");
const soloonUseCase_1 = require("../../../application/useCases/soloonUseCase");
const goalMapUseCase_1 = require("../../../application/useCases/goalMapUseCase");
const megaverse_ctrl_1 = require("../../controller/megaverse.ctrl");
const PolyanetRepository_1 = require("../../repository/PolyanetRepository");
const ComethRepository_1 = require("../../repository/ComethRepository");
const SoloonRepository_1 = require("../../repository/SoloonRepository");
const GoalMapRepository_1 = require("../../repository/GoalMapRepository");
const xPatternService_1 = require("../../../application/Services/xPatternService");
const route = (0, express_1.Router)();
const polyanetRepo = new PolyanetRepository_1.PolyanetRepository();
const comethRepo = new ComethRepository_1.ComethRepository();
const soloonRepo = new SoloonRepository_1.SoloonRepository();
const goalMapRepo = new GoalMapRepository_1.GoalMapRepository();
const polyanetUseCase = new polyanetUseCase_1.PolyanetUseCase(polyanetRepo);
const comethUseCase = new comethUseCase_1.ComethUseCase(comethRepo);
const soloonUseCase = new soloonUseCase_1.SoloonUseCase(soloonRepo);
const goalMapUseCase = new goalMapUseCase_1.GoalMapUseCase(goalMapRepo);
const xPatternService = new xPatternService_1.XPatternService(polyanetUseCase, soloonUseCase, comethUseCase);
const megaverseCtrl = new megaverse_ctrl_1.MegaverseController(polyanetUseCase, comethUseCase, soloonUseCase, goalMapUseCase, xPatternService);
/**
 * @swagger
 * components:
 *   schemas:
 *     Goal:
 *       type: array
 *       items:
 *         type: array
 *         items:
 *           type: string
 *       example:
 *         - ["SPACE", "SPACE", "SPACE", "SPACE"]
 *         - ["SPACE", "SPACE", "SPACE", "SPACE"]
 *     Soloon:
 *       type: object
 *       properties:
 *         candidateId:
 *           type: string
 *           description: The candidate id given for your megaverse
 *         row:
 *           type: number
 *           description: The row number
 *         column:
 *           type: number
 *           description: The column number
 *         color:
 *           type: string
 *           description: The color you want to set for your soloon object
 *       required:
 *         - candidateId
 *         - row
 *         - column
 *       example:
 *         candidateId: gQBOyGbxcQy6tEp0aZ78X
 *         row: 1
 *         column: 1
 *         color: purple
 *     Cometh:
 *       type: object
 *       properties:
 *         candidateId:
 *           type: string
 *           description: The candidate id given for your megaverse
 *         row:
 *           type: number
 *           description: The row number
 *         column:
 *           type: number
 *           description: The column number
 *         direction:
 *           type: string
 *           description: The direction you want to set for your cometh object
 *       required:
 *         - candidateId
 *         - row
 *         - column
 *       example:
 *         candidateId: gQBOyGbxcQy6tEp0aZ78X
 *         row: 1
 *         column: 1
 *         direction: up
 *     Polyanet:
 *       type: object
 *       properties:
 *         candidateId:
 *           type: string
 *           description: The candidate id given for your megaverse
 *         row:
 *           type: number
 *           description: The row number
 *         column:
 *           type: number
 *           description: The column number
 *       required:
 *         - candidateId
 *         - row
 *         - column
 *       example:
 *         candidateId: gQBOyGbxcQy6tEp0aZ78X
 *         row: 1
 *         column: 1
 *     PatternGoal:
 *       type: object
 *       properties:
 *         candidateId:
 *           type: string
 *           description: The candidate id given for your megaverse
 *       required:
 *         - candidateId
 *       example:
 *         candidateId: gQBOyGbxcQy6tEp0aZ78X
 *     BadRequest:
 *       type: object
 *       properties:
 *         msg:
 *           type: string
 *           description: A message for a bad request
 *       example:
 *         msg: Bad request body
 *     SucessfulRequest:
 *       type: object
 *       example:
 *         msg: {}
 *     parameters:
 *       candidateId:
 *         in: path
 *         name: candidateId
 *         required: true
 *         schema:
 *           type: string
 *         description: The candidate id
 */
/**
 * @swagger
 * tags:
 *  name: Megaverse
 *  description: Megaverse endpoint
 */
/**
 * @swagger
 * /api/v1/polyanet:
 *   post:
 *     summary: Insert a polyanet in the megaverse map.
 *     tags: [Polyanet]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Polyanet'
 *     responses:
 *       200:
 *         description: Insert a polyanet.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/SucessfulRequest'
 *       400:
 *         description: Could not insert the polyanet.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BadRequest'
 *       500:
 *         description: Some server error.
 */
route.post(`/polyanet`, megaverseCtrl.insertPolyanet);
/**
 * @swagger
 * /api/v1/cometh:
 *   post:
 *     summary: Insert a cometh in the megaverse map.
 *     tags: [Cometh]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cometh'
 *     responses:
 *       200:
 *         description: Insert a cometh.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/SucessfulRequest'
 *       400:
 *         description: Could not insert the cometh.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BadRequest'
 *       500:
 *         description: Some server error.
 */
route.post(`/cometh`, megaverseCtrl.insertCometh);
/**
 * @swagger
 * /api/v1/soloon:
 *   post:
 *     summary: Insert a soloon in the megaverse map.
 *     tags: [Soloon]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Soloon'
 *     responses:
 *       200:
 *         description: Insert a soloon.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/SucessfulRequest'
 *       400:
 *         description: Could not insert the soloon.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BadRequest'
 *       500:
 *         description: Some server error.
 */
route.post(`/soloon`, megaverseCtrl.insertSoloon);
/**
 * @swagger
 * /api/v1/create-x-pattern_from_goal:
 *   post:
 *     summary: Automatically get the goal map and resolve the challenge by adding comeths, polyanets, and soloons to the map.
 *     tags: [PatternGoal]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PatternGoal'
 *     responses:
 *       200:
 *         description: The pattern matching the goal was created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/SucessfulRequest'
 *       400:
 *         description: Could not create the pattern.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BadRequest'
 *       500:
 *         description: Some server error.
 */
route.post(`/create-x-pattern_from_goal`, megaverseCtrl.insertXPatternFromGoal);
/**
 * @swagger
 * /api/v1/polyanet:
 *   delete:
 *     summary: Delete the polyanet from the map.
 *     tags: [Polyanet]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Polyanet'
 *     responses:
 *       200:
 *         description: Delete polyanet
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/SucessfulRequest'
 *       400:
 *         description: Could not delete polyanet
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BadRequest'
 *       500:
 *         description: Some server error
 */
route.delete(`/polyanet`, megaverseCtrl.deletePolyanet);
/**
 * @swagger
 * /api/v1/soloon:
 *   delete:
 *     summary: Delete the soloon from the map.
 *     tags: [Soloon]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Polyanet'
 *     responses:
 *       200:
 *         description: Delete soloon
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/SucessfulRequest'
 *       400:
 *         description: Could not delete soloon
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BadRequest'
 *       500:
 *         description: Some server error
 */
route.delete(`/soloon`, megaverseCtrl.deleteSoloon);
/**
 * @swagger
 * /api/v1/cometh:
 *   delete:
 *     summary: Delete the cometh from the map.
 *     tags: [Cometh]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Polyanet'
 *     responses:
 *       200:
 *         description: Delete cometh
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/SucessfulRequest'
 *       400:
 *         description: Could not delete cometh
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BadRequest'
 *       500:
 *         description: Some server error
 */
route.delete(`/cometh`, megaverseCtrl.deleteCometh);
/**
 * @swagger
 * /api/v1/goalmap/{candidateId}:
 *   get:
 *     summary: Returns the goal of the megaverse challenge as a list of lists
 *     tags: [GoalMap]
 *     parameters:
 *       - $ref: '#/components/parameters/candidateId'
 *     responses:
 *       200:
 *         description: The goal map
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Goal'
 *       400:
 *         description: Could not get the goal map
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TaskNotFound'
 */
route.get(`/goalmap/:candidateId`, megaverseCtrl.getGoalMap);
exports.default = route;
//# sourceMappingURL=megaverse.route.js.map