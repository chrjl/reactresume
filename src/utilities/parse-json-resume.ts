import Ajv from 'ajv';
import addFormats from 'ajv-formats';

import parseJson5Yaml from './parse-json5-yaml';

import schema from '../assets/schema.json';

const ajv = new Ajv({ strict: 'log', allowUnionTypes: true });
addFormats(ajv);
const validate = ajv.compile(schema);

export default function parse(value: string) {
  const resume = parseJson5Yaml(value);
  const valid = validate(resume);

  if (!valid) {
    console.error(validate.errors);
    throw new SyntaxError('JSON schema error');
  }

  return resume;
}
