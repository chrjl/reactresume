import Ajv from 'ajv';
import addFormats from 'ajv-formats';

import schema from '../assets/schema.json';

const ajv = new Ajv({ strict: 'log', allowUnionTypes: true });
addFormats(ajv);
const validate = ajv.compile(schema);

export default function validateJsonResume(json: object | null): boolean {
  const valid = validate(json);

  if (!valid) {
    console.error(validate.errors);
  }

  return valid;
}
