import { v4 as uuid } from 'uuid';

console.time('uuid');
console.log(uuid());
console.timeEnd('uuid');