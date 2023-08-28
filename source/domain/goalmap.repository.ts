export interface IGoalMapRepository {
    getGoalMap(candidateId: string): Promise<any>
}