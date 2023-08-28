import { IComethRepository } from "../../domain/cometh.repository";
import { createCometh, deleteCometh } from "../api/MegaverseApi";

export class ComethRepository implements IComethRepository {
  async createCometh(candidateId: string, row: number, column: number, direction: string): Promise<any> {
    try {
      const response = await createCometh(candidateId, row, column, direction);
      return response; // Return the API response
    } catch (error: any) {
      console.error('Error creating Cometh:', error);
      throw new Error('Error creating Cometh: ' + error.message);
    }
  }
  async deleteCometh(candidateId: string, row: number, column: number): Promise<any> {
    try {
      const response = await deleteCometh(candidateId, row, column);
      return response; // Return the API response
    } catch (error: any) {
      console.error('Error deleting Cometh:', error);
      throw new Error('Error deleting Cometh: ' + error.message);
    }
  }

}