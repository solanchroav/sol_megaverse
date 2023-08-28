import Joi from 'joi';

interface ComethInput {
  candidateId: string;
  row: number;
  column: number;
  direction: string | null;
}

const comethSchema = Joi.object<ComethInput>({
  candidateId: Joi.string().required(),
  row: Joi.number().integer().positive().required(),
  column: Joi.number().integer().positive().required(),
  direction: Joi.string().allow(null)
});

export { ComethInput, comethSchema };