import { IGoalMapRepository } from "../../domain/goalmap.repository";
import { getGoalMapByCandidateId } from "../api/MegaverseApi";

export class GoalMapRepository implements IGoalMapRepository {
  async getGoalMap(candidateId: string): Promise<any> {
    try {
      const response = await getGoalMapByCandidateId(candidateId);
      return response; // Return the API response
    } catch (error: any) {
      console.error('Error while fetching the goal map from the API: ', error);
      throw new Error('Error getting the goal map: ' + error.message);
    }
  }
}