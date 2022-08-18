// Gus => [G,u,s] => string => string[]
// [G,u,s] => Gus => string[] => string

function parseString(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join('');
  } else {
    return input.split('');
  }
}

const rtaArray = parseString('Gus');
if (Array.isArray(rtaArray)) {
  console.log(rtaArray.reverse());
}

const rtaString = parseString(['G', 'u', 's']);
if (typeof rtaString === 'string') {
  console.log(rtaString.toLowerCase());
}
