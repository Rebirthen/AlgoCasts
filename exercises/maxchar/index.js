// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let obj = {};
  let maxChar ="";
  let max=0;
  for(let char of str){
      if(obj[char]){
          obj[char]++
      }else{
          obj[char]=1
      }
  }

  for(let char in obj){
    if(obj[char]>max){
        maxChar=char
        max = obj[char]
    }
  }

 return maxChar;
}

console.log(maxChar("hello"))

module.exports = maxChar;
// function maxChar(str) {
//     let obj = {};
//     [...str].forEach((c) =>
//         (obj[c] = (obj[c] || 0) + 1)    
//       );
//       return Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
//   }
  