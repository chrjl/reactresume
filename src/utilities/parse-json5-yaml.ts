import JSON5 from 'json5';
import YAML from 'yaml';

export default function parseObject(text: string): object {
  try {
    return JSON5.parse(text);
  } catch (e) {
    if ((e as Error).name === 'SyntaxError') {
      console.warn('Data is not a valid JSON5 object');
    }
  }

  try {
    const data = YAML.parse(text);

    if (typeof data !== 'object') {
      throw new SyntaxError();
    }

    return YAML.parse(text);
  } catch (e) {
    if ((e as Error).name === 'SyntaxError') {
      console.warn('Data is not a valid YAML object');
    }
  }

  return {};
}
