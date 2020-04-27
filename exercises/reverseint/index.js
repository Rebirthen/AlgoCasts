// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  console.log(n<0?-1:1,[...(n+"")].reverse().join``)
   return  parseInt([...(n+"")].reverse().join``)*Math.sign(n)

}

module.exports = reverseInt;
