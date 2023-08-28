import Joi from 'joi';

interface SoloonInput {
  candidateId: string;
  row: number;
  column: number;
  color: string | null;
}

const soloonSchema = Joi.object<SoloonInput>({
  candidateId: Joi.string().required(),
  row: Joi.number().integer().positive().required(),
  column: Joi.number().integer().positive().required(),
  color: Joi.string().allow(null)
});

export { SoloonInput, soloonSchema };