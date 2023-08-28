import { IComethRepository } from "../../domain/cometh.repository";

export class ComethUseCase {
    constructor(private readonly comethRepository: IComethRepository) {

    }

    public createCometh = async ({ candidateId, row, column, direction }: { candidateId: string, row: number, column: number, direction: string }) => {
        try {
            const comethCreated = await this.comethRepository.createCometh(candidateId, row, column, direction);
            return comethCreated;
        } catch (error) {
            console.error('Error creating cometh:', error);
            throw new Error('Failed to create cometh');
        }
    }

    public deleteCometh = async ({ candidateId, row, column }: { candidateId: string, row: number, column: number }) => {
        try {
            const deleteCometh = await this.comethRepository.deleteCometh(candidateId, row, column);
            return deleteCometh;
        } catch (error) {
            console.error('Error deleting cometh:', error);
            throw new Error('Failed to delete cometh');
        }
    }
}