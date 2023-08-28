export interface IPolyanetRepository {
    createPolyanet(candidateId: string, row: number, column: number): Promise<any>
    deletePolyanet(candidateId: string, row: number, column: number): Promise<any>
}