const withoutEnd = () => {
  while (true) {
    console.log('Nunca parar de aprender');
  }
};

const fail = (message: string): never => {
  throw new Error(message);
};

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'Es un string';
  } else if (Array.isArray(input)) {
    return 'Es un array';
  }
  return fail('No match');
};

console.log(example('Hola'));
console.log(example([1, 2, 3]));
console.log(example(0)); // En este punto se lanza error
console.log(example('Hola despues del fail'));
