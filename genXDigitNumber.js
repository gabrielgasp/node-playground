function generateXDigitNumber(x) {
  var number = "";
  for (var i = 0; i < x; i++) {
    number += Math.floor(Math.random() * 10);
  }
  return number;
}

console.log(generateXDigitNumber(6));
