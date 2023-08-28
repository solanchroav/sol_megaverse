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
exports.MegaverseController = void 0;
const polyanetSchema_1 = require("../../application/validation/polyanetSchema");
const comethSchema_1 = require("../../application/validation/comethSchema");
const soloonSchema_1 = require("../../application/validation/soloonSchema");
const patternGoalSchema_1 = require("../../application/validation/patternGoalSchema");
class MegaverseController {
    constructor(polyanetUseCase, comethUseCase, soloonUseCase, goalMapUseCase, xPatternService) {
        this.polyanetUseCase = polyanetUseCase;
        this.comethUseCase = comethUseCase;
        this.soloonUseCase = soloonUseCase;
        this.goalMapUseCase = goalMapUseCase;
        this.xPatternService = xPatternService;
        this.insertPolyanet = this.insertPolyanet.bind(this);
        this.insertCometh = this.insertCometh.bind(this);
        this.insertSoloon = this.insertSoloon.bind(this);
        this.deletePolyanet = this.deletePolyanet.bind(this);
        this.deleteCometh = this.deleteCometh.bind(this);
        this.deleteSoloon = this.deleteSoloon.bind(this);
        this.getGoalMap = this.getGoalMap.bind(this);
        this.insertXPatternFromGoal = this.insertXPatternFromGoal.bind(this);
    }
    getGoalMap(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const candidateId = req.params.candidateId;
                const goalMap = yield this.goalMapUseCase.getGoalMap(`${candidateId}`);
                console.log("log de goalMap: ", goalMap);
                res.status(200).send({ goalMap: goalMap });
            }
            catch (error) {
                console.error('Error:', error);
                res.status(500).json({ error: 'An error occurred while trying to get the goalMap' });
            }
        });
    }
    insertXPatternFromGoal(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Validate request header to be contentType application/json
                const contentType = req.headers['content-type'];
                if (contentType !== 'application/json') {
                    res.status(400).send({ error: 'Invalid content type. Expected application/json.' });
                    return;
                }
                const { error } = patternGoalSchema_1.patternGoalSchema.validate(req.body);
                if (error) {
                    res.status(400).send({ error: 'Invalid input data', details: error.details });
                    return;
                }
                const { candidateId } = req.body;
                const response = yield this.goalMapUseCase.getGoalMap(candidateId);
                yield this.xPatternService.createXPatternFromGoalMap(req.body, response.goal);
                res.status(200).json({ message: 'X-pattern created successfully' });
            }
            catch (error) {
                console.error('Error:', error);
                res.status(500).json({ error: 'An error occurred while creating the X-pattern' });
            }
        });
    }
    insertPolyanet(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Validate request header to be contentType application/json
                const contentType = req.headers['content-type'];
                if (contentType !== 'application/json') {
                    res.status(400).send({ error: 'Invalid content type. Expected application/json.' });
                    return;
                }
                // Validate request body against input schema
                const { error } = polyanetSchema_1.polyanetSchema.validate(req.body);
                if (error) {
                    res.status(400).send({ error: 'Invalid input data', details: error.details });
                    return;
                }
                // Call your use case to create the polyanet
                const polyanetResponse = yield this.polyanetUseCase.createPolyanet(req.body);
                // Send success response
                res.status(201).send({ polyanet: polyanetResponse });
            }
            catch (error) {
                console.error('Error inserting polyanet:', error);
                res.status(500).send({ error: 'Internal server error' });
            }
        });
    }
    insertCometh(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Validate request header to be contentType application/json
                const contentType = req.headers['content-type'];
                if (contentType !== 'application/json') {
                    res.status(400).send({ error: 'Invalid content type. Expected application/json.' });
                    return;
                }
                // Validate request body against input schema
                const { error } = comethSchema_1.comethSchema.validate(req.body);
                if (error) {
                    res.status(400).send({ error: 'Invalid input data', details: error.details });
                    return;
                }
                // Call your use case to create the polyanet
                const comethResponse = yield this.comethUseCase.createCometh(req.body);
                // Send success response
                res.status(201).send({ cometh: comethResponse });
            }
            catch (error) {
                console.error('Error inserting cometh:', error);
                res.status(500).send({ error: 'Internal server error' });
            }
        });
    }
    insertSoloon(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Validate request header to be contentType application/json
                const contentType = req.headers['content-type'];
                if (contentType !== 'application/json') {
                    res.status(400).send({ error: 'Invalid content type. Expected application/json.' });
                    return;
                }
                // Validate request body against input schema
                const { error } = soloonSchema_1.soloonSchema.validate(req.body);
                if (error) {
                    res.status(400).send({ error: 'Invalid input data', details: error.details });
                    return;
                }
                // Call your use case to create the polyanet
                const soloonResponse = yield this.soloonUseCase.createSoloon(req.body);
                // Send success response
                res.status(201).send({ soloon: soloonResponse });
            }
            catch (error) {
                console.error('Error inserting soloon:', error);
                res.status(500).send({ error: 'Internal server error' });
            }
        });
    }
    deletePolyanet(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Validate request header to be contentType application/json
                const contentType = req.headers['content-type'];
                if (contentType !== 'application/json') {
                    res.status(400).send({ error: 'Invalid content type. Expected application/json.' });
                    return;
                }
                // Validate request body against input schema
                const { error } = polyanetSchema_1.polyanetSchema.validate(req.body);
                if (error) {
                    res.status(400).send({ error: 'Invalid input data', details: error.details });
                    return;
                }
                // Call your use case to create the polyanet
                const polyanetResponse = yield this.polyanetUseCase.deletePolyanet(req.body);
                // Send success response
                res.status(201).send({ polyanet: polyanetResponse });
            }
            catch (error) {
                console.error('Error deleting polyanet:', error);
                res.status(500).send({ error: 'Internal server error' });
            }
        });
    }
    deleteCometh(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Validate request header to be contentType application/json
                const contentType = req.headers['content-type'];
                if (contentType !== 'application/json') {
                    res.status(400).send({ error: 'Invalid content type. Expected application/json.' });
                    return;
                }
                // Validate request body against input schema
                const { error } = comethSchema_1.comethSchema.validate(req.body);
                if (error) {
                    res.status(400).send({ error: 'Invalid input data', details: error.details });
                    return;
                }
                // Call your use case to create the polyanet
                const comethResponse = yield this.comethUseCase.deleteCometh(req.body);
                // Send success response
                res.status(201).send({ cometh: comethResponse });
            }
            catch (error) {
                console.error('Error deleting cometh:', error);
                res.status(500).send({ error: 'Internal server error' });
            }
        });
    }
    deleteSoloon(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Validate request header to be contentType application/json
                const contentType = req.headers['content-type'];
                if (contentType !== 'application/json') {
                    res.status(400).send({ error: 'Invalid content type. Expected application/json.' });
                    return;
                }
                // Validate request body against input schema
                const { error } = soloonSchema_1.soloonSchema.validate(req.body);
                if (error) {
                    res.status(400).send({ error: 'Invalid input data', details: error.details });
                    return;
                }
                // Call your use case to create the polyanet
                const soloonResponse = yield this.soloonUseCase.deleteSoloon(req.body);
                // Send success response
                res.status(201).send({ soloon: soloonResponse });
            }
            catch (error) {
                console.error('Error deleting soloon:', error);
                res.status(500).send({ error: 'Internal server error' });
            }
        });
    }
}
exports.MegaverseController = MegaverseController;
//# sourceMappingURL=megaverse.ctrl.js.map