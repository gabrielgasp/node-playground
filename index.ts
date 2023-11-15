const AGE = 'age'

interface obj {
  // name: string;
  [AGE]?: number;
}

const obj1: obj = {}

const age = obj1[AGE];