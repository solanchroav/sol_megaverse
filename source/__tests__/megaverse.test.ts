import supertest from "supertest";
import createServer from "../infrastructure/utils/server";
import * as MegaverseApi from "../infrastructure/api/MegaverseApi";

const app = createServer();


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
            it("should return the goal map", async () => {
                // Mock the MegaverseApi.getGoalMapByCandidateId method
                const getGoalMapByCandidateIdMock = jest
                    .spyOn(MegaverseApi, "getGoalMapByCandidateId")
                    .mockResolvedValueOnce(goalMapPayload);

                // Send a GET request to the endpoint
                const { statusCode, body } = await supertest(app).get("/api/v1/goalmap/123");

                // Assert the response
                expect(statusCode).toBe(200);
                expect(body.goalMap).toEqual(goalMapPayload);

                // Verify that the method was called
                expect(getGoalMapByCandidateIdMock).toHaveBeenCalledWith("123");

            });
        });
    });

    describe("get the megaverse goalMap", () => {
        describe("given the wrong candidate id ", () => {
            it("should return a 400", async () => {
                // Mock the MegaverseApi.getGoalMapByCandidateId method to throw an error
                const getGoalMapByCandidateIdMock = jest
                    .spyOn(MegaverseApi, "getGoalMapByCandidateId")
                    .mockRejectedValue(new Error("An error occurred while trying to get the goalMap"));

                // Send a GET request to the endpoint
                const { statusCode, body } = await supertest(app).get("/api/v1/goalmap/123");

                // Assert the response
                expect(statusCode).toBe(500);
                expect(body.error).toBe("An error occurred while trying to get the goalMap");

                // Verify that the method was called
                expect(getGoalMapByCandidateIdMock).toHaveBeenCalledWith("123");
            });
        });
    });

    describe("create a polyanet", () => {
        describe("given the valid candidate id, and other arguments ", () => {
            it("should return an empty object", async () => {
                const createPolyanetMock = jest
                    .spyOn(MegaverseApi, "createPolyanet")
                    // @ts-ignore
                    .mockReturnValueOnce(payload);

                const { statusCode, body } = await supertest(app)
                    .post("/api/v1/polyanet")
                    .set("Content-Type", "application/json")
                    .send(input);

                expect(statusCode).toBe(201);
                expect(body.polyanet).toEqual(payload);
                expect(createPolyanetMock).toHaveBeenCalledWith(
                    input.candidateId,
                    input.row,
                    input.column);

            });
        });
    });

    describe("create a polyanet", () => {
        describe("given the wrong arguments ", () => {
            it("should return 400", async () => {
                const createPolyanetMock = jest
                    .spyOn(MegaverseApi, "createPolyanet")
                    // @ts-ignore
                    .mockReturnValueOnce(payload);

                const { statusCode } = await supertest(app)
                    .post("/api/v1/polyanet")
                    .send({ candidateId: 123 });

                expect(statusCode).toBe(400);
                expect(createPolyanetMock).not.toHaveBeenCalled();

            });
        });
    });

    describe("create a cometh", () => {
        describe("given the valid arguments ", () => {
            it("should return an empty object", async () => {
                const createComethMock = jest
                    .spyOn(MegaverseApi, "createCometh")
                    // @ts-ignore
                    .mockReturnValueOnce(payload);

                const { statusCode, body } = await supertest(app)
                    .post("/api/v1/cometh")
                    .set("Content-Type", "application/json")
                    .send(comethInput);

                expect(statusCode).toBe(201);
                expect(body.cometh).toEqual(payload);
                expect(createComethMock).toHaveBeenCalledWith(
                    comethInput.candidateId,
                    comethInput.row,
                    comethInput.column,
                    comethInput.direction);

            });
        });
    });

    describe("create a cometh", () => {
        describe("given the wrong arguments", () => {
            it("should return 400", async () => {
                const createComethMock = jest
                    .spyOn(MegaverseApi, "createCometh")
                    // @ts-ignore
                    .mockReturnValueOnce(payload);

                const { statusCode } = await supertest(app)
                    .post("/api/v1/cometh")
                    .send({ candidateId: 123 });

                expect(statusCode).toBe(400);
                expect(createComethMock).not.toHaveBeenCalled();

            });
        });
    });

    describe("create a soloon", () => {
        describe("given the valid arguments ", () => {
            it("should return an empty object", async () => {
                const createSoloonMock = jest
                    .spyOn(MegaverseApi, "createSoloon")
                    // @ts-ignore
                    .mockReturnValueOnce(payload);

                const { statusCode, body } = await supertest(app)
                    .post("/api/v1/soloon")
                    .set("Content-Type", "application/json")
                    .send(soloonInput);

                expect(statusCode).toBe(201);
                expect(body.soloon).toEqual(payload);
                expect(createSoloonMock).toHaveBeenCalledWith(
                    soloonInput.candidateId,
                    soloonInput.row,
                    soloonInput.column,
                    soloonInput.color);

            });
        });
    });

    describe("create a soloon", () => {
        describe("given the wrong arguments", () => {
            it("should return 400", async () => {
                const createSoloonMock = jest
                    .spyOn(MegaverseApi, "createSoloon")
                    // @ts-ignore
                    .mockReturnValueOnce(payload);

                const { statusCode } = await supertest(app)
                    .post("/api/v1/soloon")
                    .send({ candidateId: 123 });

                expect(statusCode).toBe(400);
                expect(createSoloonMock).not.toHaveBeenCalled();

            });
        });
    });

    describe("delete a soloon", () => {
        describe("given the valid arguments ", () => {
            it("should return an empty object", async () => {
                const deleteSoloonMock = jest
                    .spyOn(MegaverseApi, "deleteSoloon")
                    // @ts-ignore
                    .mockReturnValueOnce(payload);

                const { statusCode, body } = await supertest(app)
                    .delete("/api/v1/soloon")
                    .set("Content-Type", "application/json")
                    .send(input);

                expect(statusCode).toBe(201);
                expect(body.soloon).toEqual(payload);
                expect(deleteSoloonMock).toHaveBeenCalledWith(
                    soloonInput.candidateId,
                    soloonInput.row,
                    soloonInput.column
                );

            });
        });
    });

    describe("delete a soloon", () => {
        describe("given the wrong arguments", () => {
            it("should return 400", async () => {
                const createSoloonMock = jest
                    .spyOn(MegaverseApi, "deleteSoloon")
                    // @ts-ignore
                    .mockReturnValueOnce(payload);

                const { statusCode } = await supertest(app)
                    .delete("/api/v1/soloon")
                    .send({ candidateId: 123 });

                expect(statusCode).toBe(400);
                expect(createSoloonMock).not.toHaveBeenCalled();

            });
        });
    });

    describe("delete a cometh", () => {
        describe("given the valid arguments ", () => {
            it("should return an empty object", async () => {
                const deleteComethMock = jest
                    .spyOn(MegaverseApi, "deleteCometh")
                    // @ts-ignore
                    .mockReturnValueOnce(payload);

                const { statusCode, body } = await supertest(app)
                    .delete("/api/v1/cometh")
                    .set("Content-Type", "application/json")
                    .send(input);

                expect(statusCode).toBe(201);
                expect(body.cometh).toEqual(payload);
                expect(deleteComethMock).toHaveBeenCalledWith(
                    soloonInput.candidateId,
                    soloonInput.row,
                    soloonInput.column
                );

            });
        });
    });

    describe("delete a cometh", () => {
        describe("given the wrong arguments", () => {
            it("should return 400", async () => {
                const createComethMock = jest
                    .spyOn(MegaverseApi, "deleteCometh")
                    // @ts-ignore
                    .mockReturnValueOnce(payload);

                const { statusCode } = await supertest(app)
                    .delete("/api/v1/cometh")
                    .send({ candidateId: 123 });

                expect(statusCode).toBe(400);
                expect(createComethMock).not.toHaveBeenCalled();

            });
        });
    });

    describe("delete a polyanet", () => {
        describe("given the valid arguments ", () => {
            it("should return an empty object", async () => {
                const deletePolyanetMock = jest
                    .spyOn(MegaverseApi, "deletePolyanet")
                    // @ts-ignore
                    .mockReturnValueOnce(payload);

                const { statusCode, body } = await supertest(app)
                    .delete("/api/v1/polyanet")
                    .set("Content-Type", "application/json")
                    .send(input);

                expect(statusCode).toBe(201);
                expect(body.polyanet).toEqual(payload);
                expect(deletePolyanetMock).toHaveBeenCalledWith(
                    soloonInput.candidateId,
                    soloonInput.row,
                    soloonInput.column
                );

            });
        });
    });

    describe("delete a cometh", () => {
        describe("given the wrong arguments", () => {
            it("should return 400", async () => {
                const createComethMock = jest
                    .spyOn(MegaverseApi, "deleteCometh")
                    // @ts-ignore
                    .mockReturnValueOnce(payload);

                const { statusCode } = await supertest(app)
                    .delete("/api/v1/cometh")
                    .send({ candidateId: 123 });

                expect(statusCode).toBe(400);
                expect(createComethMock).not.toHaveBeenCalled();

            });
        });
    });
});
