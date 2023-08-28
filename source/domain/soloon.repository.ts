export interface ISoloonRepository {
    createSoloon(candidateId: string, row: number, column: number, color: string): Promise<any>
    deleteSoloon(candidateId: string, row: number, column: number): Promise<any>
}