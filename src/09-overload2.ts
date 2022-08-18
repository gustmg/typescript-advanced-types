// Gus => [G,u,s] => string => string[]
// [G,u,s] => Gus => string[] => string

export function parseString(input: string): string[];
export function parseString(input: string[]): string;
export function parseString(input: number): boolean;

export function parseString(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join('');
  } else if (typeof input === 'string') {
    return input.split('');
  } else if (typeof input === 'number') {
    return true;
  }
}

const rtaArray = parseString('Gus');
console.log(rtaArray.reverse());

const rtaString = parseString(['G', 'u', 's']);
console.log(rtaString.toLowerCase());

const rtaNumber = parseString(2);
console.log(rtaNumber);
