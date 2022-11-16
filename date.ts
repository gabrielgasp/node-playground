const confirmedDate = new Date();
const prepareTimeInMinutes = 30;
const prepareTimeInMs = prepareTimeInMinutes * 60 * 1000;
const readyTime = new Date(confirmedDate.getTime() + prepareTimeInMs);
const isOrderReady = readyTime.getTime() < new Date().getTime();

console.log(confirmedDate);
console.log(readyTime);