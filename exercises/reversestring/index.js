// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    debugger;
   return [...str].reduce((s,c)=>c+s,'')
}

module.exports = reverse;


// function reverse(str) {
//     return [...str].reverse().join("")
// }


// function reverse(str) {
//     let res = [];
//     [...str].forEach(e=>res.unshift(e));
//     return res.join("")
// }
