"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../infrastructure/utils/server"));
const MegaverseApi = __importStar(require("../infrastructure/api/MegaverseApi"));
const app = (0, server_1.default)();
const goalMapPayload = {
    goal: [
        [
            "SPACE",
            "SPACE",
            "SPACE"
        ],
        [
            "SPACE",
            "SPACE",
            "SPACE"
        ]
    ]
};
const input = {
    candidateId: "fguujui",
    row: 1,
    column: 1
};
const comethInput = {
    candidateId: "fguujui",
    row: 1,
    column: 1,
    direction: "up"
};
const soloonInput = {
    candidateId: "fguujui",
    row: 1,
    column: 1,
    color: "white"
};
const payload = { data: {} };
describe("megaverse", () => {
    // user registration
    describe("get the megaverse goalMap", () => {
        describe("given the valid candidate id ", () => {
            it("should return the goal map", () => __awaiter(void 0, void 0, void 0, function* () {
                // Mock the MegaverseApi.getGoalMapByCandidateId method
                const getGoalMapByCandidateIdMock = jest
                    .spyOn(MegaverseApi, "getGoalMapByCandidateId")
                    .mockResolvedValueOnce(goalMapPayload);
                // Send a GET request to the endpoint
                const { statusCode, body } = yield (0, supertest_1.default)(app).get("/api/v1/goalmap/123");
                // Assert the response
                expect(statusCode).toBe(200);
                expect(body.goalMap).toEqual(goalMapPayload);
                // Verify that the method was called
                expect(getGoalMapByCandidateIdMock).toHaveBeenCalledWith("123");
            }));
        });
    });
    describe("get the megaverse goalMap", () => {
        describe("given the wrong candidate id ", () => {
            it("should return a 400", () => __awaiter(void 0, void 0, void 0, function* () {
                // Mock the MegaverseApi.getGoalMapByCandidateId method to throw an error
                const getGoalMapByCandidateIdMock = jest
                    .spyOn(MegaverseApi, "getGoalMapByCandidateId")
                    .mockRejectedValue(new Error("An error occurred while trying to get the goalMap"));
                // Send a GET request to the endpoint
                const { statusCode, body } = yield (0, supertest_1.default)(app).get("/api/v1/goalmap/123");
                // Assert the response
                expect(statusCode).toBe(500);
                expect(body.error).toBe("An error occurred while trying to get the goalMap");
                // Verify that the method was called
                expect(getGoalMapByCandidateIdMock).toHaveBeenCalledWith("123");
            }));
        });
    });
    describe("create a polyanet", () => {
        describe("given the valid candidate id, and other arguments ", () => {
            it("should return an empty object", () => __awaiter(void 0, void 0, void 0, function* () {
                const createPolyanetMock = jest
                    .spyOn(MegaverseApi, "createPolyanet")
                    // @ts-ignore
                    .mockReturnValueOnce(payload);
                const { statusCode, body } = yield (0, supertest_1.default)(app)
                    .post("/api/v1/polyanet")
                    .set("Content-Type", "application/json")
                    .send(input);
                expect(statusCode).toBe(201);
                expect(body.polyanet).toEqual(payload);
                expect(createPolyanetMock).toHaveBeenCalledWith(input.candidateId, input.row, input.column);
            }));
        });
    });
    describe("create a polyanet", () => {
        describe("given the wrong arguments ", () => {
            it("should return 400", () => __awaiter(void 0, void 0, void 0, function* () {
                const createPolyanetMock = jest
                    .spyOn(MegaverseApi, "createPolyanet")
                    // @ts-ignore
                    .mockReturnValueOnce(payload);
                const { statusCode } = yield (0, supertest_1.default)(app)
                    .post("/api/v1/polyanet")
                    .send({ candidateId: 123 });
                expect(statusCode).toBe(400);
                expect(createPolyanetMock).not.toHaveBeenCalled();
            }));
        });
    });
    describe("create a cometh", () => {
        describe("given the valid arguments ", () => {
            it("should return an empty object", () => __awaiter(void 0, void 0, void 0, function* () {
                const createComethMock = jest
                    .spyOn(MegaverseApi, "createCometh")
                    // @ts-ignore
                    .mockReturnValueOnce(payload);
                const { statusCode, body } = yield (0, supertest_1.default)(app)
                    .post("/api/v1/cometh")
                    .set("Content-Type", "application/json")
                    .send(comethInput);
                expect(statusCode).toBe(201);
                expect(body.cometh).toEqual(payload);
                expect(createComethMock).toHaveBeenCalledWith(comethInput.candidateId, comethInput.row, comethInput.column, comethInput.direction);
            }));
        });
    });
    describe("create a cometh", () => {
        describe("given the wrong arguments", () => {
            it("should return 400", () => __awaiter(void 0, void 0, void 0, function* () {
                const createComethMock = jest
                    .spyOn(MegaverseApi, "createCometh")
                    // @ts-ignore
                    .mockReturnValueOnce(payload);
                const { statusCode } = yield (0, supertest_1.default)(app)
                    .post("/api/v1/cometh")
                    .send({ candidateId: 123 });
                expect(statusCode).toBe(400);
                expect(createComethMock).not.toHaveBeenCalled();
            }));
        });
    });
    describe("create a soloon", () => {
        describe("given the valid arguments ", () => {
            it("should return an empty object", () => __awaiter(void 0, void 0, void 0, function* () {
                const createSoloonMock = jest
                    .spyOn(MegaverseApi, "createSoloon")
                    // @ts-ignore
                    .mockReturnValueOnce(payload);
                const { statusCode, body } = yield (0, supertest_1.default)(app)
                    .post("/api/v1/soloon")
                    .set("Content-Type", "application/json")
                    .send(soloonInput);
                expect(statusCode).toBe(201);
                expect(body.soloon).toEqual(payload);
                expect(createSoloonMock).toHaveBeenCalledWith(soloonInput.candidateId, soloonInput.row, soloonInput.column, soloonInput.color);
            }));
        });
    });
    describe("create a soloon", () => {
        describe("given the wrong arguments", () => {
            it("should return 400", () => __awaiter(void 0, void 0, void 0, function* () {
                const createSoloonMock = jest
                    .spyOn(MegaverseApi, "createSoloon")
                    // @ts-ignore
                    .mockReturnValueOnce(payload);
                const { statusCode } = yield (0, supertest_1.default)(app)
                    .post("/api/v1/soloon")
                    .send({ candidateId: 123 });
                expect(statusCode).toBe(400);
                expect(createSoloonMock).not.toHaveBeenCalled();
            }));
        });
    });
    describe("delete a soloon", () => {
        describe("given the valid arguments ", () => {
            it("should return an empty object", () => __awaiter(void 0, void 0, void 0, function* () {
                const deleteSoloonMock = jest
                    .spyOn(MegaverseApi, "deleteSoloon")
                    // @ts-ignore
                    .mockReturnValueOnce(payload);
                const { statusCode, body } = yield (0, supertest_1.default)(app)
                    .delete("/api/v1/soloon")
                    .set("Content-Type", "application/json")
                    .send(input);
                expect(statusCode).toBe(201);
                expect(body.soloon).toEqual(payload);
                expect(deleteSoloonMock).toHaveBeenCalledWith(soloonInput.candidateId, soloonInput.row, soloonInput.column);
            }));
        });
    });
    describe("delete a soloon", () => {
        describe("given the wrong arguments", () => {
            it("should return 400", () => __awaiter(void 0, void 0, void 0, function* () {
                const createSoloonMock = jest
                    .spyOn(MegaverseApi, "deleteSoloon")
                    // @ts-ignore
                    .mockReturnValueOnce(payload);
                const { statusCode } = yield (0, supertest_1.default)(app)
                    .delete("/api/v1/soloon")
                    .send({ candidateId: 123 });
                expect(statusCode).toBe(400);
                expect(createSoloonMock).not.toHaveBeenCalled();
            }));
        });
    });
    describe("delete a cometh", () => {
        describe("given the valid arguments ", () => {
            it("should return an empty object", () => __awaiter(void 0, void 0, void 0, function* () {
                const deleteComethMock = jest
                    .spyOn(MegaverseApi, "deleteCometh")
                    // @ts-ignore
                    .mockReturnValueOnce(payload);
                const { statusCode, body } = yield (0, supertest_1.default)(app)
                    .delete("/api/v1/cometh")
                    .set("Content-Type", "application/json")
                    .send(input);
                expect(statusCode).toBe(201);
                expect(body.cometh).toEqual(payload);
                expect(deleteComethMock).toHaveBeenCalledWith(soloonInput.candidateId, soloonInput.row, soloonInput.column);
            }));
        });
    });
    describe("delete a cometh", () => {
        describe("given the wrong arguments", () => {
            it("should return 400", () => __awaiter(void 0, void 0, void 0, function* () {
                const createComethMock = jest
                    .spyOn(MegaverseApi, "deleteCometh")
                    // @ts-ignore
                    .mockReturnValueOnce(payload);
                const { statusCode } = yield (0, supertest_1.default)(app)
                    .delete("/api/v1/cometh")
                    .send({ candidateId: 123 });
                expect(statusCode).toBe(400);
                expect(createComethMock).not.toHaveBeenCalled();
            }));
        });
    });
    describe("delete a polyanet", () => {
        describe("given the valid arguments ", () => {
            it("should return an empty object", () => __awaiter(void 0, void 0, void 0, function* () {
                const deletePolyanetMock = jest
                    .spyOn(MegaverseApi, "deletePolyanet")
                    // @ts-ignore
                    .mockReturnValueOnce(payload);
                const { statusCode, body } = yield (0, supertest_1.default)(app)
                    .delete("/api/v1/polyanet")
                    .set("Content-Type", "application/json")
                    .send(input);
                expect(statusCode).toBe(201);
                expect(body.polyanet).toEqual(payload);
                expect(deletePolyanetMock).toHaveBeenCalledWith(soloonInput.candidateId, soloonInput.row, soloonInput.column);
            }));
        });
    });
    describe("delete a cometh", () => {
        describe("given the wrong arguments", () => {
            it("should return 400", () => __awaiter(void 0, void 0, void 0, function* () {
                const createComethMock = jest
                    .spyOn(MegaverseApi, "deleteCometh")
                    // @ts-ignore
                    .mockReturnValueOnce(payload);
                const { statusCode } = yield (0, supertest_1.default)(app)
                    .delete("/api/v1/cometh")
                    .send({ candidateId: 123 });
                expect(statusCode).toBe(400);
                expect(createComethMock).not.toHaveBeenCalled();
            }));
        });
    });
});
//# sourceMappingURL=megaverse.test.js.map