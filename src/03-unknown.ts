let anyVar: any;
anyVar = 0;

let isNew: boolean = anyVar;

let unknownVar: unknown;

if (typeof unknownVar === 'string') {
  unknownVar.toUpperCase();
}

if (typeof unknownVar === 'boolean') {
  let isNewV2: boolean = unknownVar;
}

const parse = (stringToParse: string): unknown => {
  return JSON.parse(stringToParse);
};
