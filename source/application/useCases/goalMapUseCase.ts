import { IGoalMapRepository } from "../../domain/goalmap.repository";

export class GoalMapUseCase {
    constructor(private readonly goalMapRepository: IGoalMapRepository) {

    }

    public getGoalMap = async (candidateId: string) => {
        try {
            const goalMap = await this.goalMapRepository.getGoalMap(candidateId);
            return goalMap;
        } catch (error) {
            console.error('Error getting the goal map:', error);
            throw new Error('Failed to get the goal map');
        }
    }

}