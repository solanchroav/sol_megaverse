import { ISoloonRepository } from "../../domain/soloon.repository";
import { createSoloon, deleteSoloon } from "../api/MegaverseApi";

export class SoloonRepository implements ISoloonRepository {
  async createSoloon(candidateId: string, row: number, column: number, color: string): Promise<any> {
    try {
      const response = await createSoloon(candidateId, row, column, color);
      return response; // Return the API response
    } catch (error: any) {
      console.error('Error creating Soloon:', error);
      throw new Error('Error creating Soloon: ' + error.message);
    }
  }
  async deleteSoloon(candidateId: string, row: number, column: number): Promise<any> {
    try {
      const response = await deleteSoloon(candidateId, row, column);
      return response; // Return the API response
    } catch (error: any) {
      console.error('Error deleting Soloon:', error);
      throw new Error('Error deleting Soloon: ' + error.message);
    }
  }

}