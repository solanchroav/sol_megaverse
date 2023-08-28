import { IPolyanetRepository } from "../../domain/polyanet.repository";

export class PolyanetUseCase {
    constructor(private readonly polyanetRepository: IPolyanetRepository) {

    }

    public createPolyanet = async ({ candidateId, row, column }: { candidateId: string, row: number, column: number }) => {
        try {
            const polyanetCreated = await this.polyanetRepository.createPolyanet(candidateId, row, column);
            return polyanetCreated;
        } catch (error) {
            console.error('Error creating polyanet:', error);
            throw new Error('Failed to create polyanet');
        }
    }

    public deletePolyanet = async ({ candidateId, row, column }: { candidateId: string, row: number, column: number }) => {
        try {
            const polyanetDeleted = await this.polyanetRepository.deletePolyanet(candidateId, row, column);
            return polyanetDeleted;
        } catch (error) {
            console.error('Error deleting cometh:', error);
            throw new Error('Failed to delete cometh');
        }
    }
}