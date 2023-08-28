export interface IComethRepository {
    createCometh(candidateId: string, row: number, column: number, direction: string): Promise<any>
    deleteCometh(candidateId: string, row: number, column: number): Promise<any>
}