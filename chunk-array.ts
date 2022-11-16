export function chunkArray<T>(array: T[], chunkSize: number): T[][] {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

const testArray: number[] = [];

for (let i = 1; i <= 890; i++) {
  testArray.push(i);
}

console.log(testArray.length);

console.log(chunkArray(testArray, 50));