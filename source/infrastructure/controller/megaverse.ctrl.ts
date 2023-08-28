import { Request, Response } from 'express';
import { PolyanetUseCase } from "../../application/useCases/polyanetUseCase";
import { ComethUseCase } from "../../application/useCases/comethUseCase";
import { SoloonUseCase } from "../../application/useCases/soloonUseCase";
import { GoalMapUseCase } from "../../application/useCases/goalMapUseCase";
import { XPatternService } from "../../application/Services/xPatternService";
import { polyanetSchema } from '../../application/validation/polyanetSchema';
import { comethSchema } from '../../application/validation/comethSchema';
import { soloonSchema } from '../../application/validation/soloonSchema';
import { patternGoalSchema } from '../../application/validation/patternGoalSchema';

export class MegaverseController {
  constructor(private polyanetUseCase: PolyanetUseCase,
    private comethUseCase: ComethUseCase,
    private soloonUseCase: SoloonUseCase,
    private goalMapUseCase: GoalMapUseCase,
    private xPatternService: XPatternService
  ) {
    this.insertPolyanet = this.insertPolyanet.bind(this)
    this.insertCometh = this.insertCometh.bind(this)
    this.insertSoloon = this.insertSoloon.bind(this)
    this.deletePolyanet = this.deletePolyanet.bind(this)
    this.deleteCometh = this.deleteCometh.bind(this)
    this.deleteSoloon = this.deleteSoloon.bind(this)
    this.getGoalMap = this.getGoalMap.bind(this)
    this.insertXPatternFromGoal = this.insertXPatternFromGoal.bind(this)
  }

  public async getGoalMap(req: Request, res: Response) {
    try {
      const candidateId = req.params.candidateId;
      const goalMap = await this.goalMapUseCase.getGoalMap(`${candidateId}`);

      console.log("log de goalMap: ", goalMap)
      res.status(200).send({ goalMap: goalMap });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'An error occurred while trying to get the goalMap' });
    }

  }

  public async insertXPatternFromGoal(req: Request, res: Response) {
    try {
      // Validate request header to be contentType application/json
      const contentType = req.headers['content-type'];
      if (contentType !== 'application/json') {
        res.status(400).send({ error: 'Invalid content type. Expected application/json.' });
        return
      }

      const { error } = patternGoalSchema.validate(req.body);
      if (error) {
        res.status(400).send({ error: 'Invalid input data', details: error.details });
        return;
      }

      const { candidateId } = req.body;
      const response = await this.goalMapUseCase.getGoalMap(candidateId);
      await this.xPatternService.createXPatternFromGoalMap(req.body, response.goal);
      res.status(200).json({ message: 'X-pattern created successfully' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'An error occurred while creating the X-pattern' });
    }
  }

  public async insertPolyanet(req: Request, res: Response) {
    try {

      // Validate request header to be contentType application/json
      const contentType = req.headers['content-type'];
      if (contentType !== 'application/json') {
        res.status(400).send({ error: 'Invalid content type. Expected application/json.' });
        return
      }

      // Validate request body against input schema
      const { error } = polyanetSchema.validate(req.body);
      if (error) {
        res.status(400).send({ error: 'Invalid input data', details: error.details });
        return;
      }

      // Call your use case to create the polyanet
      const polyanetResponse = await this.polyanetUseCase.createPolyanet(req.body);

      // Send success response
      res.status(201).send({ polyanet: polyanetResponse });
    } catch (error) {
      console.error('Error inserting polyanet:', error);
      res.status(500).send({ error: 'Internal server error' });
    }
  }

  public async insertCometh(req: Request, res: Response) {
    try {

      // Validate request header to be contentType application/json
      const contentType = req.headers['content-type'];
      if (contentType !== 'application/json') {
        res.status(400).send({ error: 'Invalid content type. Expected application/json.' });
        return
      }

      // Validate request body against input schema
      const { error } = comethSchema.validate(req.body);
      if (error) {
        res.status(400).send({ error: 'Invalid input data', details: error.details });
        return;
      }

      // Call your use case to create the polyanet
      const comethResponse = await this.comethUseCase.createCometh(req.body);

      // Send success response
      res.status(201).send({ cometh: comethResponse });
    } catch (error) {
      console.error('Error inserting cometh:', error);
      res.status(500).send({ error: 'Internal server error' });
    }
  }

  public async insertSoloon(req: Request, res: Response) {
    try {
      // Validate request header to be contentType application/json
      const contentType = req.headers['content-type'];
      if (contentType !== 'application/json') {
        res.status(400).send({ error: 'Invalid content type. Expected application/json.' });
        return
      }

      // Validate request body against input schema
      const { error } = soloonSchema.validate(req.body);
      if (error) {
        res.status(400).send({ error: 'Invalid input data', details: error.details });
        return;
      }

      // Call your use case to create the polyanet
      const soloonResponse = await this.soloonUseCase.createSoloon(req.body);

      // Send success response
      res.status(201).send({ soloon: soloonResponse });
    } catch (error) {
      console.error('Error inserting soloon:', error);
      res.status(500).send({ error: 'Internal server error' });
    }
  }


  public async deletePolyanet(req: Request, res: Response) {
    try {
      // Validate request header to be contentType application/json
      const contentType = req.headers['content-type'];
      if (contentType !== 'application/json') {
        res.status(400).send({ error: 'Invalid content type. Expected application/json.' });
        return
      }
      // Validate request body against input schema
      const { error } = polyanetSchema.validate(req.body);
      if (error) {
        res.status(400).send({ error: 'Invalid input data', details: error.details });
        return;
      }

      // Call your use case to create the polyanet
      const polyanetResponse = await this.polyanetUseCase.deletePolyanet(req.body);

      // Send success response
      res.status(201).send({ polyanet: polyanetResponse });
    } catch (error) {
      console.error('Error deleting polyanet:', error);
      res.status(500).send({ error: 'Internal server error' });
    }
  }

  public async deleteCometh(req: Request, res: Response) {
    try {
      // Validate request header to be contentType application/json
      const contentType = req.headers['content-type'];
      if (contentType !== 'application/json') {
        res.status(400).send({ error: 'Invalid content type. Expected application/json.' });
        return
      }
      // Validate request body against input schema
      const { error } = comethSchema.validate(req.body);
      if (error) {
        res.status(400).send({ error: 'Invalid input data', details: error.details });
        return;
      }

      // Call your use case to create the polyanet
      const comethResponse = await this.comethUseCase.deleteCometh(req.body);

      // Send success response
      res.status(201).send({ cometh: comethResponse });
    } catch (error) {
      console.error('Error deleting cometh:', error);
      res.status(500).send({ error: 'Internal server error' });
    }
  }

  public async deleteSoloon(req: Request, res: Response) {
    try {
      // Validate request header to be contentType application/json
      const contentType = req.headers['content-type'];
      if (contentType !== 'application/json') {
        res.status(400).send({ error: 'Invalid content type. Expected application/json.' });
        return
      }
      // Validate request body against input schema
      const { error } = soloonSchema.validate(req.body);
      if (error) {
        res.status(400).send({ error: 'Invalid input data', details: error.details });
        return;
      }

      // Call your use case to create the polyanet
      const soloonResponse = await this.soloonUseCase.deleteSoloon(req.body);

      // Send success response
      res.status(201).send({ soloon: soloonResponse });
    } catch (error) {
      console.error('Error deleting soloon:', error);
      res.status(500).send({ error: 'Internal server error' });
    }
  }
}