import { ISoloonRepository } from "../../domain/soloon.repository";

export class SoloonUseCase {
    constructor(private readonly soloonRepository: ISoloonRepository) {

    }

    public createSoloon = async ({ candidateId, row, column, color }: { candidateId: string, row: number, column: number, color: string }) => {
        try {
            const soloonCreated = await this.soloonRepository.createSoloon(candidateId, row, column, color);
            return soloonCreated;
        } catch (error) {
            console.error('Error creating soloon:', error);
            throw new Error('Failed to create soloon');
        }
    }

    public deleteSoloon = async ({ candidateId, row, column }: { candidateId: string, row: number, column: number }) => {
        try {
            const soloonDeleted = await this.soloonRepository.deleteSoloon(candidateId, row, column);
            return soloonDeleted;
        } catch (error) {
            console.error('Error deleting soloon:', error);
            throw new Error('Failed to delete soloon');
        }
    }
}