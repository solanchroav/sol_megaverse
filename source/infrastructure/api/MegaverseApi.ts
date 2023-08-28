import axios from 'axios';
import { 
  ConsecutiveBreaker,
  ExponentialBackoff,
  retry,
  handleAll,
  circuitBreaker,
  wrap, } from 'cockatiel';
import { MEGAVERSE_API_URL } from '../../config/appConfig';
import ApiResponse from './ApiResponse';

const retryService = retry(handleAll, { maxAttempts: 3, backoff: new ExponentialBackoff({initialDelay: 1000}) });

const circuitBreakerService = circuitBreaker(handleAll, {
  halfOpenAfter: 10 * 1000,
  breaker: new ConsecutiveBreaker(5),
});

const retryWithBreaker = wrap(retryService, circuitBreakerService);

export const getGoalMapByCandidateId = async (candidateId: string): Promise<ApiResponse> => {
  try {
    const response = await retry(
      handleAll,
      { maxAttempts: 3 },
    ).execute(async () => await axios.get(`${MEGAVERSE_API_URL}/api/map/${candidateId}/goal`));

    return response.data;
  } catch (error: any) {
    throw new Error('Error getting the goal map: ' + error.message);
  }
}

export const createPolyanet = async (candidateId: string, row: number, column: number): Promise<any> => {
  try {

    const response = await retryWithBreaker.execute(async () => await axios.post(`${MEGAVERSE_API_URL}/api/polyanets`, {
      candidateId: candidateId,
      row: row,
      column: column
    }));

    return response.data;
  } catch (error: any) {
    throw new Error('Error creating Polyanet: ' + error.message);
  }
}

export const createCometh = async (candidateId: string, row: number, column: number, direction: string): Promise<any> => {
  try {

    const response = await retryWithBreaker.execute(async () => await axios.post(`${MEGAVERSE_API_URL}/api/comeths`, {
      candidateId: candidateId,
      row: row,
      column: column,
      direction: direction
    }));

    return response.data;
  } catch (error: any) {
    throw new Error('Error creating Cometh: ' + error.message);
  }
}

export const createSoloon = async (candidateId: string, row: number, column: number, color: string): Promise<any> => {
  try {

    const response = await retryWithBreaker.execute(async () => await axios.post(`${MEGAVERSE_API_URL}/api/soloons`, {
      candidateId: candidateId,
      row: row,
      column: column,
      color: color
    }));

    return response.data;
  } catch (error: any) {
    throw new Error('Error creating Soloon: ' + error.message);
  }
}

export const deletePolyanet = async (candidateId: string, row: number, column: number): Promise<any> => {
  try {
    const requestBody = JSON.stringify({
      candidateId: candidateId,
      row: row,
      column: column
    });

    const customConfig = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const response = await retry(
      handleAll,
      { maxAttempts: 3 },
    ).execute(async () => await axios.delete(`${MEGAVERSE_API_URL}/api/polyanets`, { data: requestBody, ...customConfig }));

    return response.data;
  } catch (error: any) {
    throw new Error('Error deleting Polyanet: ' + error.message);
  }
}

export const deleteCometh = async (candidateId: string, row: number, column: number): Promise<any> => {
  try {
    const requestBody = JSON.stringify({
      candidateId: candidateId,
      row: row,
      column: column
    });

    const customConfig = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const response = await retry(
      handleAll,
      { maxAttempts: 3 },
    ).execute(async () => await axios.delete(`${MEGAVERSE_API_URL}/api/comeths`, { data: requestBody, ...customConfig }));

    return response.data;
  } catch (error: any) {
    throw new Error('Error deleting Cometh: ' + error.message);
  }
}

export const deleteSoloon = async (candidateId: string, row: number, column: number): Promise<any> => {
  try {
    const requestBody = JSON.stringify({
      candidateId: candidateId,
      row: row,
      column: column
    });

    const customConfig = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const response = await retry(
      handleAll,
      { maxAttempts: 3 },
    ).execute(async () => await axios.delete(`${MEGAVERSE_API_URL}/api/soloons`, { data: requestBody, ...customConfig }));

    return response.data;
  } catch (error: any) {
    throw new Error('Error deleting Soloon: ' + error.message);
  }
}

