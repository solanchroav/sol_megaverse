import Joi from 'joi';

interface PatternGoalInput {
  candidateId: string;
}

const patternGoalSchema = Joi.object<PatternGoalInput>({
  candidateId: Joi.string().required(),
});

export { PatternGoalInput, patternGoalSchema };