import Joi from 'joi';

interface PolyanetInput {
  candidateId: string;
  row: number;
  column: number;
}

const polyanetSchema = Joi.object<PolyanetInput>({
  candidateId: Joi.string().required(),
  row: Joi.number().integer().positive().required(),
  column: Joi.number().integer().positive().required(),
});

export { PolyanetInput, polyanetSchema };