import { PolyanetUseCase } from '../useCases/polyanetUseCase';
import { SoloonUseCase } from '../useCases/soloonUseCase';
import { ComethUseCase } from '../useCases/comethUseCase';


export class XPatternService {
  constructor(private polyanetUseCase: PolyanetUseCase,
    private soloonUseCase: SoloonUseCase,
    private comethUseCase: ComethUseCase) {

  }

  async createXPatternFromGoalMap({ candidateId }: { candidateId: string }, goal: string[][]): Promise<void> {
    try {

      for (let row = 0; row < goal.length; row++) {
        for (let column = 0; column < goal[row].length; column++) {
          const entity = goal[row][column];

          if (entity === 'POLYANET') {
            await this.polyanetUseCase.createPolyanet({ candidateId, row, column });
          } else if (entity.includes('SOLOON')) {
            const color = entity.split('_')[0].toLowerCase();
            await this.soloonUseCase.createSoloon({ candidateId, row, column, color });
          } else if (entity.includes('COMETH')) {
            const direction = entity.split('_')[0].toLowerCase();
            await this.comethUseCase.createCometh({ candidateId, row, column, direction });
          }
        }
      }

    } catch (error) {
      console.error('Error creating X pattern:', error);
      throw new Error('Failed to create X pattern');
    }
  }
}