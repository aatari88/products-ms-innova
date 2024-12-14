import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  NODE_ENV: string;
  PORT: number;
  DATABASE_URL: string;
}

const envsSchema = joi
  .object({
    NODE_ENV: joi
      .string()
      .valid('development', 'production', 'test')
      .default('development'),
    PORT: joi.number().default(3000),
    DATABASE_URL: joi.string().required(),
  })
  .unknown()
  .required();

const { error, value } = envsSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
  nodeEnv: envVars.NODE_ENV,
  port: envVars.PORT,
  databaseUrl: envVars.DATABASE_URL,
};
