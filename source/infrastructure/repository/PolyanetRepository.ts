import { IPolyanetRepository } from "../../domain/polyanet.repository";
import { createPolyanet, deletePolyanet } from '../api/MegaverseApi';


export class PolyanetRepository implements IPolyanetRepository {
  async createPolyanet(candidateId: string, row: number, column: number): Promise<any> {
    try {
      const response = await createPolyanet(candidateId, row, column);
      return response; // Return the API response
    } catch (error: any) {
      console.error('Error creating Polyanet:', error);
      throw new Error('Error creating Polyanet: ' + error.message);
    }
  }

  async deletePolyanet(candidateId: string, row: number, column: number): Promise<any> {
    try {
      const response = await deletePolyanet(candidateId, row, column);
      return response; // Return the API response
    } catch (error: any) {
      console.error('Error deleting Polyanet:', error);
      throw new Error('Error deleting Polyanet: ' + error.message);
    }
  }

}